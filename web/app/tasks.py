"""
Dasgiau ar gyfer gwefan y trawsgrifiwr.
"""
import logging
import os
import transaction

from pyramid_celery import celery_app as app
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from zope.sqlalchemy import register

from .transcriber import transcribe


log = logging.getLogger(__name__)


@app.task
def transcribe_audio(file_path):
    """
    file_path mewn fformat wav
    """
    # Dydi'r linter ddim yn hoffi transcribe_audio
    # gan fod yr 'Exception' yn rhy 'generic'
    # pylint: disable=broad-except
    if ".wav" not in file_path:
        log.warning("Not a wav file")
        return
    uid = file_path.replace(".wav", "").replace("data/", "")
    transcriber_model = transcribe.Transcriber(
        '/usr/src/app/app/transcriber/models')
    log.info("Processing file %s", file_path)
    temp_file_path = file_path.replace(".wav", "_temp.wav")
    cmd = "ffmpeg-normalize {} -ar 16000 -o {}".format(
        file_path, temp_file_path)
    os.system(cmd)
    os.rename(temp_file_path, file_path)
    log.info("Running transcriber")
    try:
        dbsession = connect_to_db()
        doc = transcriber_model.transcribe_to_doc(file_path, 1, uid)
        log.info("Transcription completed")
        dbsession.add(doc)
        doc.export("BACKUP")
    except Exception as err:
        # mor generic gan fod deepspeech yn taflu 'un recoverable error'
        log.warning("Unexpected error: %s", err)
        # TODO: rhaid codi err yn y DB fama
        os.rename(file_path, file_path + ".failed")
    transaction.commit()
    # pylint: enable=broad-except


@app.task
def youtube_dl(url, uid):
    """
    Modd i'r defnyddwyr defnyddio dolen yn lle ffeiliau.
    Lawrlwytho ffeil o gwasanaeth streamio fel YouTube fel wav efo enw uuid4
    rhedeg transcribe_audio() yn syth
     """
    cmd = "youtube-dl -x --audio-format wav " + url + \
        " -o data/" + uid + ".wav"
    os.system(cmd)
    cmd = "ffmpeg -i data/"+uid + \
        ".wav -acodec pcm_s16le -ar 16000 -ac 1 data/" + uid+"_temp.wav"
    os.system(cmd)
    os.rename("data/"+uid+"_temp.wav", "data/"+uid+".wav")
    transcribe_audio("data/"+uid+".wav")
    transaction.commit()


@app.task
def convert_file(file_path, uid):
    """
    Modd i'r defnyddwyr ywchlytho ffeiliau ar whan i '.wav'.
    Newid ffeil o pa bynnag fformat i wav a galw transcribe_audio yn syth
    """
    new_name = "data/" + uid + ".wav"
    cmd = "ffmpeg -i " + file_path + \
        " -acodec pcm_s16le -ar 16000 -ac 1 " + new_name
    os.system(cmd)
    os.remove(file_path)
    transcribe_audio(new_name)
    transaction.commit()


def connect_to_db():
    engine = create_engine(
        'mysql://root:trawsgrifiwr@db:3306/trawsgrifiwr?charset=utf8')
    factory = sessionmaker()
    factory.configure(bind=engine)
    dbsession = factory()
    register(dbsession)
    return dbsession
