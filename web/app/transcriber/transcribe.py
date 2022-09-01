#!/bin/env python3
import logging
import os
import torch

import numpy as np
from transformers import Wav2Vec2ForCTC, Wav2Vec2Processor
from ctcdecode import CTCBeamDecoder
from tqdm import tqdm

from app.transcriber import models
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

    def __init__(self, wav2vec2_model_path='', version=''):

        self.device = "cpu"
        self.wav2vec2_model_path = wav2vec2_model_path
        self.version = version

        self.processor, self.model, self.vocab, self.ctcdecoder, self.kenlm_ctcdecoder = models.create(
            self.wav2vec2_model_path, self.version)

    def split_frames(self, frames, aggressiveness):

        for audio_segment in split(frames, aggressiveness=aggressiveness):

            audio_segment_buffer, audio_segment_time_start, audio_segment_time_end = audio_segment

            audio_segment_time_start = audio_segment_time_start / 1000
            audio_segment_time_end = audio_segment_time_end / 1000
            audio_segment_duration = audio_segment_time_end - audio_segment_time_start

            # print (audio_segment_duration, len(audio_segment_buffer), aggressiveness)

            if audio_segment_duration > 100.0 and aggressiveness < 4:
                self.split_frames(audio_segment_buffer, aggressiveness + 1)
            else:
                yield audio_segment_buffer, audio_segment_time_start, audio_segment_time_end

    def transcribe(self, wav_file_path, max_segment_length=8, max_segment_words=14, withlm=False):

        print("Transcribing: %s" % wav_file_path)

        frames = read_frames_from_file(wav_file_path)
        for audio_segment in self.split_frames(frames, aggressiveness=1):

            audio_segment_buffer, audio_segment_time_start, audio_segment_time_end = audio_segment

            # Run stt on the chunk that just completed VAD
            audio = np.frombuffer(audio_segment_buffer, dtype=np.int16)

            features = self.processor(audio, sampling_rate=16_000, return_tensors="pt", padding=True)
            with torch.no_grad():
                logits = self.model(features.input_values.to(self.device),
                                    attention_mask=features.attention_mask.to(self.device)).logits

            transcription, alignment, timesteps = self.ctc_decode(logits, withlm)

            timestep_length = (audio_segment_time_end - audio_segment_time_start) / timesteps
            for a in alignment:
                a[1] = ((a[1] * timestep_length) + audio_segment_time_start)

            aligned_words = align_words(alignment, timestep_length)

            if len(aligned_words) > 0:
                for transcription, seg_start, seg_end, seg_alignment in segment(aligned_words, max_segment_length,
                                                                                max_segment_words):
                    yield Transcript(seg_start, seg_end, transcription, 0, 0)

    def transcribe_to_doc(self, wav_file_path, uid):
        log.info("INFO :: transcribing %s", wav_file_path)
        transcripts = []
        index = 1
        for trans in self.transcribe(wav_file_path):
            log.info("INFO :: transcription index %d", index)
            if len(trans.candidate.strip()) == 0:
                continue
            trans.correction_index = index
            transcripts.append(trans)
            index += 1
        return Document(wav_file_path, transcripts, uid)

    def ctc_decode(self, logits, withlm):

        if withlm:
            beam_results, beam_scores, timesteps, out_lens = self.kenlm_ctcdecoder.decode(logits)
        else:
            beam_results, beam_scores, timesteps, out_lens = self.ctcdecoder.decode(logits)
        beam_string = "".join(self.vocab[n] for n in beam_results[0][0][:out_lens[0][0]])
        alignment = list()
        for i in range(0, out_lens[0][0]):
            alignment.append([beam_string[i], int(timesteps[0][0][i])])

        return beam_string, alignment, int(beam_results.shape[2])

    def greedy_decode(self, logits):
        predicted_ids = torch.argmax(logits, dim=-1)
        return self.processor.batch_decode(predicted_ids)[0]


def align_words(char_alignments, timestep_length):
    word_alignments = list()

    word = ''
    w_start = 0.0
    w_end = 0.0

    for c, ts in char_alignments:
        if c != " ":
            if len(word) == 0:
                word = c
                w_start = ts
                w_end = ts + timestep_length
            else:
                word = word + c
                w_end = ts
        else:
            word_alignments.append({'word': word, 'start': w_start, 'end': ts})
            word = ''

    if len(word) > 0:
        word_alignments.append({'word': word, 'start': w_start, 'end': w_end})

    return word_alignments


def segment(word_alignments, segment_max_length, segment_max_words):
    segment_alignments = list()
    segment_text = ''
    segment_start = 0
    segment_end = 0
    for alignment in word_alignments:
        # if the segment has reached a maximum number of words
        if len(segment_alignments) > segment_max_words:
            yield segment_text, segment_start, segment_end, segment_alignments
            segment_alignments = list()
        # if the segment has reached a maximum time duration
        if alignment['end'] > segment_start + segment_max_length:
            yield segment_text, segment_start, segment_end, segment_alignments
            segment_alignments = list()
        # set start_time if this is an empty segment
        if len(segment_alignments) == 0:
            segment_start = alignment['start']
        # append the current segment to the list
        segment_text = segment_text + ' ' + alignment['word']
        segment_text = segment_text.strip()
        segment_end = alignment['end']
        segment_alignments.append(alignment)
    # if the segment does not hit yield condition within the loop
    if len(segment_alignments) > 0:
        yield segment_text, segment_start, segment_end, segment_alignments
