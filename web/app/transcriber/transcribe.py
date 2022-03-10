#!/bin/env python3
import logging
import numpy as np
import os
import yaml
import torch
import librosa
import tarfile
import urllib.request
from urllib.parse import urlparse

from pathlib import Path
from tqdm import tqdm

from transformers import Wav2Vec2ForCTC, Wav2Vec2Processor
from ctcdecode import CTCBeamDecoder

from app.models.transcript import Transcript
from app.models.document import Document
from app.transcriber.vadSplit import read_frames_from_file, split

log = logging.getLogger(__name__)

class DownloadProgressBar(tqdm):
    def update_to(self, b=1, bsize=1, tsize=None):
        if tsize is not None:
            self.total = tsize
        self.update(b * bsize - self.n)


class Transcriber:

    def __init__(self, model_root_dir, acoustic_model_path, version, language_model_path):

        print ("Initialising processor...")
        self.processor = Wav2Vec2Processor.from_pretrained(acoustic_model_path, cache_dir=model_root_dir, revision=version)

        print ("Initialising wav2vec ctc model...")
        self.model = Wav2Vec2ForCTC.from_pretrained(acoustic_model_path, cache_dir=model_root_dir, revision=version)
                
        print ("Initialising vocab...")
        self.vocab=self.processor.tokenizer.convert_ids_to_tokens(range(0, self.processor.tokenizer.vocab_size))
        space_ix = self.vocab.index('|')
        self.vocab[space_ix]=' '

        targz_file_path=os.path.join(language_model_path, "kenlm.tar.gz")
        if not Path(targz_file_path).is_file():
            print ("Downloading kenlm language model version {}".format(revision))
            try:
                file_url = os.path.join("https://huggingface.co", model_path, "resolve", revision, 'kenlm.tar.gz')
                download(file_url, os.path.join(language_model_path, targz_file_path))
            except Exception as e:
                print (e)
                                                                                    
        if not Path(os.path.join(language_model_path, "config_ctc.yaml")).is_file():
            if Path(targz_file_path).is_file():
                extract(targz_file_path)

        if Path(os.path.join(language_model_path, "config_ctc.yaml")).is_file():
            with open(os.path.join(language_model_path, "config_ctc.yaml"), 'r') as config_file:
                ctc_lm_params=yaml.load(config_file, Loader=yaml.FullLoader)

        print ("Initialising ctc with lm decoder...")
        self.ctcdecoder = CTCBeamDecoder(self.vocab,
            model_path=os.path.join(language_model_path, "lm.binary"),
            alpha=ctc_lm_params['alpha'],
            beta=ctc_lm_params['beta'],
            cutoff_top_n=40,
            cutoff_prob=1.0,
            beam_width=10,
            num_processes=4,
            blank_id=self.processor.tokenizer.pad_token_id,
            log_probs_input=True
        )


    def transcribe(self, wav_file_path, max_segment_length=8, max_segment_words=14):
        wav_audio, rate = librosa.load(wav_file_path, sr=16000)

        time_start = 0.0
        time_end = librosa.get_duration(y=wav_audio,sr=rate)
        
        frames = read_frames_from_file(wav_file_path)
        for audio_segment in split(frames, aggressiveness=1):
            
            audio_segment_buffer, audio_segment_time_start, audio_segment_time_end = audio_segment
            audio_segment_time_start = audio_segment_time_start / 1000
            audio_segment_time_end = audio_segment_time_end / 1000

            # Run stt on the chunk that just completed VAD
            audio = np.frombuffer(audio_segment_buffer, dtype=np.int16)

            inputs = self.processor(audio, sampling_rate=16_000, return_tensors="pt", padding=True)
            with torch.no_grad():
                logits = self.model(inputs.input_values, attention_mask=inputs.attention_mask).logits
        
            transcription, alignment, timesteps = self.ctc_withlm_decode(logits)

            timestep_length = (audio_segment_time_end - audio_segment_time_start) / timesteps
            for a in alignment:
                a[1] = ((a[1] * timestep_length) + audio_segment_time_start)

            aligned_words = self.aligned_words(alignment)

            for transcription, seg_start, seg_end, seg_alignment in self.segment(aligned_words, max_segment_length, max_segment_words):
                log.info("Transcription init %s, %f, %f", transcription, seg_start, seg_end)
                trans = Transcript(seg_start, seg_end, transcription, 0, 0)
                yield trans


            

    def transcribe_to_doc(self, wav_file_path, uid):
        transcripts = []
        index = 1
        for trans in self.transcribe(wav_file_path):
            if len(trans.candidate.strip()) == 0:
                continue
            trans.correction_index = index
            transcripts.append(trans)
            index += 1
        return Document(wav_file_path, transcripts, uid)

    def ctc_withlm_decode(self, logits):
        beam_results, beam_scores, timesteps, out_lens = self.ctcdecoder.decode(logits)

        # beam_results - Shape: BATCHSIZE x N_BEAMS X N_TIMESTEPS A batch containing the series 
        # of characters (these are ints, you still need to decode them back to your text) representing 
        # results from a given beam search. Note that the beams are almost always shorter than the 
        # total number of timesteps, and the additional data is non-sensical, so to see the top beam 
        # (as int labels) from the first item in the batch, you need to run beam_results[0][0][:out_len[0][0]].
        beam_string = "".join(self.vocab[n] for n in beam_results[0][0][:out_lens[0][0]])
       
        # beam_scores - Shape: BATCHSIZE x N_BEAMS A batch with the approximate CTC score of each beam 
        # If this is true, you can get the model's confidence that the beam is correct with 
        # p=1/np.exp(beam_score).
        score = 0.0 #float(beam_scores[0][0].item()) / 100
 
        # timesteps : BATCHSIZE x N_BEAMS : the timestep at which the nth output character has peak probability. 
        # Can be used as alignment between the audio and the transcript.
        alignment = list()
        for i in range(0, out_lens[0][0]):        
            alignment.append([beam_string[i], int(timesteps[0][0][i])] )

        return beam_string, alignment, int(beam_results.shape[2]) 


    def greedy_decode(self, logits):
        predicted_ids = torch.argmax(logits, dim=-1)
        return self.processor.batch_decode(predicted_ids)[0]
        

    def aligned_words(self, char_alignments):
        word_alignments = list()

        word = ''
        w_start = 0.0
        w_end = 0.0        

        for c, ts in char_alignments:
            if c != " ":
                if len(word)==0:
                    word = c
                    w_start=ts
                else:
                    word = word + c
                    w_end = ts
            else:                
                word_alignments.append({'word':word, 'start':w_start, 'end':ts})
                word=''

        if (len(word)>0):
            word_alignments.append({'word':word, 'start':w_start, 'end':w_end})

        return word_alignments


    def segment(self, word_alignments, segment_max_length, segment_max_words):
        segment_alignments = list()
        segment_text = ''
        segment_start = 0
        segment_end = 0
        if len(word_alignments) > 0:
            segment_start = word_alignments[0]['start']
            segment_end = word_alignments[0]['end']

            for a in word_alignments:

                # if the segment has reached a maximum number of words
                if len(segment_alignments)>segment_max_words:             
                    yield segment_text, segment_start, segment_end, segment_alignments
                    segment_text = a['word']
                    segment_start = a['start']
                    segment_end = a['end']
                    segment_alignments = list()
                    segment_alignments.append(a)
                elif a['start'] > segment_start + segment_max_length:
                    yield segment_text, segment_start, segment_end, segment_alignments
                    segment_text = a['word']
                    segment_start = a['start']
                    segment_end = a['end']
                    segment_alignments = list()
                    segment_alignments.append(a)
                else:
                    segment_text = segment_text + ' ' + a['word']
                    segment_text = segment_text.strip()
                    segment_end = a['end']
                    segment_alignments.append(a)                    
        yield segment_text, segment_start, segment_end, segment_alignments


    def download(file_url, output_file_path):
        with DownloadProgressBar(unit='B', unit_scale=True, miniters=1, desc=file_url.split('/')[-1]) as t:
            urllib.request.urlretrieve(file_url, filename=output_file_path, reporthook=t.update_to)

    def extract(targz_file_path):
        # extract.
        if targz_file_path.endswith(".tar.gz"):
            print ("Extracting...")
            model_dir = Path(targz_file_path).parent.absolute()
            tar = tarfile.open(targz_file_path, "r:gz")
            tar.extractall(model_dir)
            tar.close()

        #Path(output_file_path).unlink()
