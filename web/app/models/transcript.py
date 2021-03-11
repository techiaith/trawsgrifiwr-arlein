"""
Class i derbyn data deepspeech sttWithMetadata
Mae 'Transcript' yn ddrychu  y data sy'n dod syth o sttWithMetadata
"""
import logging
import json

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
    transcripts = []

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

    def export_transcript(self, file_type):
        """
        Allforio un adran y trawsgrifiad, yn y fformat 'file_type'
        """

    def __str__(self):
        return "{} {} {} {}".format(self.confidence,
                                    self.start_time,
                                    self.end_time,
                                    self.candidate)

    def __init__(self, json_mata_data, start_time, end_time, candidate, correction_index):
        """
        Fewnforio o allbwm deepspeech wedi throi i json
        """
        self.start_time = start_time/1000
        self.end_time = end_time/1000
        self.candidate = candidate
        self.correction = self.candidate
        self.correction_index = correction_index
        if not self.candidate:
            vars(self).update(json_mata_data)
            for transcript in self.transcripts:
                for word in transcript['words']:
                    candidate += "{} ".format(str(word['word']))
                self.candidate = candidate.strip()
                self.correction = self.candidate
                self.confidence = transcript['confidence']
                break
