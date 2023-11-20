"""
Class i trefnu data deepspeech sttWithMetadata
Mae 'Document' yn cadw trefn ar rhestr o 'transcript'
"""
from datetime import timedelta
import pickle
import logging
import srt

import numpy
from praatio import tgio
from sqlalchemy import (
    Column,
    Integer,
    Text,
    delete,
)
from sqlalchemy.orm import relationship

from .meta import Base

log = logging.getLogger(__name__)


class Document(Base):
    """
    Dogfen yn cardw trefn ar trawsgrifiadau
    """

    __tablename__ = "document"
    id = Column(Integer, primary_key=True)
    sound_src = Column(Text, default="")
    uuid = Column(Text, default="")
    correction_index = Column(Integer, default=1)
    transcripts = relationship("Transcript", lazy="select")
    previous_transcript = {}
    next_transcript = {}
    corrections = []
    correcting_transcript = {}
    export_ready = False

    def __init__(self, path_to_file, transcripts, uuid):
        self.sound_src = path_to_file
        self.transcripts = transcripts
        self.uuid = uuid
        for transcript in self.transcripts:
            transcript.uuid = self.uuid

    def __str__(self):
        return "{} {} {}".format(self.uuid, len(self.transcripts), self.sound_src)

    def save_to_disk(self):
        """
        Cadw y Dogfen
        """
        log.info("saving file %s", self.uuid)
        file_name = "data/originals/{}.json".format(self.uuid)
        with open(file_name, "wb") as filehandler:
            pickle.dump(self, filehandler)

    def check_export_ready(self):
        """
        Chwilliwch i weld os rhydem yn barod am allforio
        Ydym, os mae pob ffeil efo gywiriad...
        """
        all_corrected = True
        for transcript in self.transcripts:
            if transcript.confidence != 1:
                all_corrected = False
                break
        if all_corrected and len(self.transcripts) > 0:
            self.export_ready = True

    def export(self, file_type):
        """
        Allforio yn y fformat 'file_type'
        """
        if file_type == "srt":
            transcribe_to_srt(self.uuid, self.transcripts, "data")
        elif file_type == "TextGrid":
            transcribe_to_textgrid(self.uuid, self.transcripts, self.sound_src)
        elif file_type == "BACKUP":
            self.save_to_disk()


def transcribe_to_srt(uid, transcripts, file_root):
    """
    Ysgrifenu'r trawsgrifiad i SRT ar ddisg
    """
    srt_segments = []
    i = 1
    for transcript in transcripts:
        start_seconds = transcript.start_time
        end_seconds = transcript.end_time
        start_delta = timedelta(seconds=start_seconds)
        end_delta = timedelta(seconds=end_seconds)
        srt_segments.append(
            srt.Subtitle(
                i, start=start_delta, end=end_delta, content=transcript.correction
            )
        )
        i = i + 1
    str_string = srt.compose(srt_segments)
    srt_file_path = "{}/{}.srt".format(file_root, uid)
    with open(srt_file_path, "w", encoding="utf-8") as srt_file:
        srt_file.write(str_string)

    print("srt file of transcription saved to %s" % srt_file_path)


def transcribe_to_textgrid(uid, transcripts, wav_file_path):
    """
    Ysgrifenu'r trawsgrifiad i TextGrid ar ddisg
    """
    textgrid_entries_list = []
    for transcript in transcripts:
        textgrid_entry = (
            transcript.start_time,
            transcript.end_time,
            transcript.correction,
        )
        textgrid_entries_list.append(textgrid_entry)

    utterance_tier = tgio.IntervalTier(
        "utterance", textgrid_entries_list, 0, pairedWav=wav_file_path
    )
    t_grid = tgio.Textgrid()
    t_grid.addTier(utterance_tier)
    textgrid_file_path = "data/{}.TextGrid".format(uid)
    t_grid.save(textgrid_file_path, useShortForm=False, outputFormat="textgrid")

    print("Textgrid of transcription saved to %s" % textgrid_file_path)


def load_from_disk(uid, dbsession):
    """
    Nol y ddata gwreiddiol
    """
    log.info("loading file %s", uid)
    file_name = "data/originals/{}.json".format(uid)
    with open(file_name, "rb") as filehandler:
        doc = pickle.load(filehandler)
        log.info("%s", str(doc))
        ddoc = dbsession.query(Document).filter(Document.uuid == uid).first()
        ddoc.transcripts = doc.transcripts


def seconds_from_hours(hms):
    """
    Nol y nifer o eiliodau o hh:mm:ss,ss
    """
    a = hms.split(":")
    a[2] = a[2].replace(",", ".")
    return ((float(a[0]) * 60 * 60) + (float(a[1]) * 60) + float(a[2])) * 1000
