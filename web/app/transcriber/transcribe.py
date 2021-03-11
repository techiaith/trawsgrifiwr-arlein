#!/bin/env python3
import glob
import logging

import numpy as np
from deepspeech import Model

from app.models.transcript import Transcript
from app.models.document import Document
from app.transcriber.vadSplit import read_frames_from_file, split

log = logging.getLogger(__name__)


class Transcriber:

    def __init__(self, models_dir_path):
        pb = glob.glob(models_dir_path + "/*.pbmm")[0]
        scorer = glob.glob(models_dir_path + "/*.scorer")[0]

        self.deepspeech = Model(pb)
        self.deepspeech.enableExternalScorer(scorer)

    def transcribe(self, wav_file_path, aggressiveness):

        frames = read_frames_from_file(wav_file_path)
        for segment in split(frames, aggressiveness=aggressiveness):

            segment_buffer, time_start, time_end = segment

            # Run deepspeech on the chunk that just completed VAD
            audio = np.frombuffer(segment_buffer, dtype=np.int16)
            metadata = self.deepspeech.sttWithMetadata(audio)
            json_obj = metadata_json_output(metadata)
            trans = Transcript(json_obj, time_start, time_end, "", 0)
            log.info("Transcription init %s", trans)
            yield trans

    def transcribe_to_doc(self, wav_file_path, aggressiveness, uid):
        transcripts = []
        index = 1
        for trans in self.transcribe(wav_file_path, aggressiveness):
            if len(trans.candidate.strip()) == 0:
                continue
            trans.correction_index = index
            transcripts.append(trans)
            index += 1
        return Document(wav_file_path, transcripts, uid)


def metadata_json_output(metadata):
    """
    troi y fodel 'metadata' o deepspeech i json, wedi ddwyn o
    https://github.com/mozilla/DeepSpeech/blob/master/native_client/python/client.py
    """
    json_result = dict()
    json_result["transcripts"] = [{
        "confidence": transcript.confidence,
        "words": words_from_candidate_transcript(transcript),
    } for transcript in metadata.transcripts]
    return json_result


def words_from_candidate_transcript(metadata):
    """
    helpiwr i troi []character i rhestr gairiau, wedi ddwyn o
    https://github.com/mozilla/DeepSpeech/blob/master/native_client/python/client.py
    """
    word = ""
    word_list = []
    word_start_time = 0
    # Loop through each character
    for i, token in enumerate(metadata.tokens):
        # Append character to word if it's not a space
        if token.text != " ":
            if len(word) == 0:
                # Log the start time of the new word
                word_start_time = token.start_time

            word = word + token.text
        # Word boundary is either a space or the last character in the array
        if token.text == " " or i == len(metadata.tokens) - 1:
            word_duration = token.start_time - word_start_time

            if word_duration < 0:
                word_duration = 0

            each_word = dict()
            each_word["word"] = word
            each_word["start_time"] = round(word_start_time, 4)
            each_word["duration"] = round(word_duration, 4)

            word_list.append(each_word)
            # Reset
            word = ""
            word_start_time = 0

    return word_list
