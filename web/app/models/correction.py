"""
Class i derbyn data dywiriadau y defnyddwyr
Mae 'Correction' yn ddrychu 'Transcript'
yn rhoi modd i nol data ar ol camgymeriad
"""
import logging

from sqlalchemy import (
    Column,
    Integer,
    Text,
)

from .meta import Base

log = logging.getLogger(__name__)


class Correction(Base):
    """
    Cywiriad sy'n cynig rhan o dogfen llawn
    """
    __tablename__ = 'correction'
    id = Column(Integer, primary_key=True)
    document_id = Column(Integer)
    uuid = Column(Text, default="")

    def undo(self):
        """
        Newid i'r cywiriad dwithaf
        """

    def reset(self):
        """
        Newid i'r ddata gwreiddiol
        """

    def export_transcript(self, file_type):
        """
        Allforio un adran y trawsgrifiad, yn y fformat 'file_type'
        """
