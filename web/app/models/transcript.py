"""
Class i derbyn data deepspeech sttWithMetadata
Mae 'Transcript' yn ddrychu  y data sy'n dod syth o sttWithMetadata
"""
import logging
import json
import numpy
import string

from sqlalchemy import (
    Column,
    Integer,
    Text,
    Float,
    ForeignKey,
)

from .meta import Base


log = logging.getLogger(__name__)


class Transcript(Base):
    """
    Trawsgrifiad sy'n cynig rhan o dogfen llawn
    """
    __tablename__ = 'transcript'
    id = Column(Integer, primary_key=True)
    document_id = Column(Integer, ForeignKey('document.id'))
    uuid = Column(Text, default="")
    start_time = Column(Float, default=0.0)
    end_time = Column(Float, default=0.0)
    candidate = Column(Text, default="")
    correction = Column(Text, default="")
    correction_index = Column(Integer(), default=0)
    confidence = Column(Float, default=0.0)
    wer = Column(Float, default=0.0)

    def reset(self):
        """
        Newid i'r ddata gwreiddiol
        """
        self.correction = ""

    def update(self, correction):
        """
        Newid y gywiriad
        """
        self.correction = correction
        self.confidence = 1
        self.wer = get_word_error_rate(self.candidate, correction)

    def export_transcript(self, file_type):
        """
        Allforio un adran y trawsgrifiad, yn y fformat 'file_type'
        """

    def __str__(self):
        return "{} {} {} {}".format(self.confidence,
                                    self.start_time,
                                    self.end_time,
                                    self.candidate)

    def __init__(self, start_time, end_time, candidate, correction_index, confidence):
        """
        Fewnforio o allbwm deepspeech wedi throi i json
        """
        self.start_time = start_time
        self.end_time = end_time
        self.candidate = candidate
        self.correction = self.candidate
        self.correction_index = correction_index
        self.confidence = confidence


def cleanWord(word):
    push = False
    new_word = ""
    last_ch = ''
    for ch in word:
        if ch == "[":
            push = True
        if not push:
            skip = False
            if ch == " " and last_ch == " ":
                skip = True
            if not skip:
                new_word += ch
                last_ch = ch
        if ch == "]":
            push = False
    new_word = new_word.lower()
    new_word = new_word.translate(
        new_word.maketrans("", "", string.punctuation))
    new_word = new_word.strip(" ")
    return new_word


def get_word_error_rate(r, h):
    """
    Given two list of strings how many word error rate(insert, delete or substitution).
    """
    r = cleanWord(r)
    h = cleanWord(h)
    d = numpy.zeros((len(r) + 1) * (len(h) + 1), dtype=numpy.uint16)
    d = d.reshape((len(r) + 1, len(h) + 1))
    for i in range(len(r) + 1):
        for j in range(len(h) + 1):
            if i == 0:
                d[0][j] = j
            elif j == 0:
                d[i][0] = i

    for i in range(1, len(r) + 1):
        for j in range(1, len(h) + 1):
            if r[i - 1] == h[j - 1]:
                d[i][j] = d[i - 1][j - 1]
            else:
                substitution = d[i - 1][j - 1] + 1
                insertion = d[i][j - 1] + 1
                deletion = d[i - 1][j] + 1
                d[i][j] = min(substitution, insertion, deletion)
    result = float(d[len(r)][len(h)]) / len(r) * 100
    return result
