"""
Tudalenau allanol yr trawsgrifiwr.
"""
import logging
import os
import re
import shutil
import unicodedata
import uuid

from app.models.document import Document, load_from_disk
from pyramid.httpexceptions import HTTPFound
from pyramid.response import FileResponse
from pyramid.view import view_config, view_defaults

from ..tasks import convert_file, youtube_dl

log = logging.getLogger(__name__)
TRANSLATION_ERROR = "Trawsgrifiad wedi methu. Triwch ffeil arall."
TRANSLATION_RUNNING = "Trawsgrifiad ddim yn barod eto..."


@view_defaults(renderer="../templates/layout.html.j2")
class ExternalViews:
    """
    Tudalenau allanol yr ap.
    """

    def __init__(self, request):
        self.request = request

    @view_config(route_name="home", renderer="../templates/home.html.j2")
    def home(self):
        """
        Tudalenau catref yr ap.
        """
        uid = ""
        if "uid" in self.request.params:
            uid = self.request.params["uid"]
        if "url" in self.request.params:
            url = self.request.params["url"]
            uid = uuid.uuid4()
            youtube_dl.delay(url, str(uid))
        return {"uid": uid}

    @view_config(route_name="upload", renderer="json")
    def upload(self):
        """
        POST upload yr ap.
        """
        if "file" in self.request.params:
            input_file = self.request.POST["file"].file
            input_file_name = self.request.POST["file"].filename
            return copy_file_to_disk(input_file, input_file_name)
        return {}

    @view_config(route_name="upload_recording")
    def upload_recording(self):
        """
        POST upload yr ap.
        """
        if "file" in self.request.params:
            log.info("got a file %s", self.request.POST["file"])
            input_file = self.request.POST["file"].file
            input_file_name = self.request.POST["file"].filename
            uid = copy_file_to_disk(input_file, input_file_name)
            log.info("got a uid %s", uid)
            url = self.request.route_url("home") + "?uid=" + uid["uid"]
            return HTTPFound(location=url)
        url = self.request.route_url("home")
        return HTTPFound(location=url)

    @view_config(route_name="player")
    def player(self):
        """
        Fordd i'w defnyddio sain heb rhoi yn static
        """
        if "uid" in self.request.params:
            uid = self.request.params["uid"]
            response = FileResponse("data/" + uid + ".wav")
            file_name = uid + ".wav"
            response.headers["Content-Disposition"] = (
                "attachment; filename=" + file_name
            )
            return response
        url = self.request.route_url(self.request.url)
        return HTTPFound(location=url)

    @view_config(route_name="revert")
    def revert(self):
        """
        Mynd nol i'r destun gwreiddiol.
        """
        if "uid" in self.request.params:
            uid = self.request.params["uid"]
            load_from_disk(uid, self.request.dbsession)
        url = self.request.route_url("correct") + "?uid=" + uid
        return HTTPFound(location=url)

    @view_config(route_name="joinregion")
    def joinregion(self):
        """
        Glybo adran efo'r nessaf.
        """
        if "append" in self.request.params:
            tid = int(self.request.params["append"])
            if "uid" in self.request.params:
                uid = self.request.params["uid"]
                doc = (
                    self.request.dbsession.query(Document)
                    .filter(Document.uuid == uid)
                    .first()
                )
                ignore = True
                if tid < len(doc.transcripts):
                    for trans in doc.transcripts:
                        if not ignore:
                            trans.correction_index -= 1
                        if trans.correction_index == tid:
                            ignore = False
                            merge_to = doc.transcripts[tid]
                            trans.end_time = merge_to.end_time
                            trans.candidate = trans.candidate + " " + merge_to.candidate
                            trans.correction = (
                                trans.correction + " " + merge_to.correction
                            )
                    del doc.transcripts[tid]
        url = self.request.route_url("correct") + "?uid=" + uid
        return HTTPFound(location=url)

    @view_config(route_name="correct", renderer="../templates/correct.html.j2")
    def correct(self):
        """
        Tudalenau trawsgrifio yr ap.
        """
        if "uid" in self.request.params:
            uid = self.request.params["uid"]
            doc, err_code = transcription_ready(uid, self.request.dbsession)
            if err_code == 0:
                move_corrected_index(self.request.params, doc)
                make_correction(self.request.params, doc)
                target_region(self.request.params, doc)
                fetch_correcting_region(doc)
                start_index, offset = buildOffset(doc)
                return {
                    "uid": uid,
                    "doc": doc,
                    "start_index": start_index,
                    "offset": offset,
                }
            if err_code == 1:
                return {"uid": uid, "doc": doc, "error": TRANSLATION_RUNNING}
            return {"uid": uid, "doc": doc, "error": TRANSLATION_ERROR}
        url = self.request.route_url(self.request.url)
        return HTTPFound(location=url)

    @view_config(route_name="export")
    def export(self):
        """
        POST allforio yr ap.
        """
        if "uid" in self.request.params:
            uid = self.request.params["uid"]
            o_type = self.request.params["o_type"]
            candidate = (
                self.request.dbsession.query(Document)
                .filter(Document.uuid == uid)
                .first()
            )
            candidate.export(o_type)
            file_name = uid + "." + o_type
            response = FileResponse("data/{}".format(file_name))
            response.headers["Content-Disposition"] = (
                "attachment; filename=" + file_name
            )
            return response
        url = self.request.route_url(self.request.url)
        return HTTPFound(location=url)


def buildOffset(doc):
    start_index = 1
    if doc.correction_index > 5:
        start_index = doc.correction_index - 5
    offset = start_index + 20
    return start_index, offset


def fetch_correcting_region(doc):
    if len(doc.transcripts) > doc.correction_index - 1:
        trans_count = 0
        for trans in doc.transcripts:
            if trans.correction_index == doc.correction_index - 1:
                doc.previous_transcript = trans
                trans_count += 1
            if trans.correction_index == doc.correction_index:
                doc.correcting_transcript = trans
                trans_count += 1
            if trans.correction_index == doc.correction_index + 1:
                doc.next_transcript = trans
                trans_count += 1
            if trans_count == 3:
                break


def target_region(params, doc):
    if "correction_index" in params:
        requested_start = params["correction_index"]
        if requested_start.find(".") == -1:
            requested_start += ".0"
        for trans in doc.transcripts:
            if str(trans.start_time) == requested_start:
                doc.correction_index = trans.correction_index
                break


def make_correction(params, doc):
    if "tid" in params:
        tid = params["tid"]
        if "correction" in params:
            correct_text = params["correction"]
            start = params["start_time"]
            end = params["end_time"]
            for updating_trans in doc.transcripts:
                if updating_trans.id == int(tid):
                    updating_trans.update(correct_text)
                    updating_trans.start_time = start
                    updating_trans.end_time = end
                    break


def move_corrected_index(params, doc):
    if "next" in params:
        move_next = params["next"]
        if move_next == "1":
            if doc.correction_index + 1 < len(doc.transcripts) + 1:
                doc.correction_index += 1
        elif move_next == "-2":
            doc.correction_index = 1
        else:
            if doc.correction_index - 1 > 0:
                doc.correction_index -= 1


def transcription_ready(uuid, dbsession):
    if os.path.isfile(uuid + ".wav.failed"):
        return {}, 2
    else:
        candidate = dbsession.query(Document).filter(Document.uuid == uuid).first()
        if candidate:
            candidate.check_export_ready()
            return candidate, 0
        return {}, 1


def copy_file_to_disk(input_file, input_file_name):
    """
    Copio ffeil i ddisg
    """
    output_file_name = slugify(input_file_name)
    with open(output_file_name, "wb") as output_file:
        shutil.copyfileobj(input_file, output_file)
    uid = str(uuid.uuid4())
    convert_file.delay(output_file_name, uid)
    return {"success": True, "uid": uid}


def slugify(value, allow_unicode=False):
    """
    From https://github.com/django/django/blob/master/django/utils/text.py
    Convert to ASCII if 'allow_unicode' is False. Convert spaces or repeated
    dashes to single dashes. Remove characters that aren't alphanumerics,
    underscores, or hyphens. Convert to lowercase. Also strip leading and
    trailing whitespace, dashes, and underscores.
    """
    value = str(value)
    if allow_unicode:
        value = unicodedata.normalize("NFKC", value)
    else:
        value = (
            unicodedata.normalize("NFKD", value)
            .encode("ascii", "ignore")
            .decode("ascii")
        )
    value = re.sub(r"[^\w\s-]", "", value.lower())
    return re.sub(r"[-\s]+", "-", value).strip("-_")
