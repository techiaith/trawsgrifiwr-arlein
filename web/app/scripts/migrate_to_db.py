"""
Sgript i symyd y hen data o ffeiliau .srt i'r gronfa ddata
"""
import argparse
import logging
import os
import sys

from pyramid.paster import bootstrap, setup_logging

from ..models.document import Document
from ..models.transcript import Transcript

log = logging.getLogger(__name__)


def setup_models(dbsession):
    """
    Add or update models / fixtures in the database.
    """
    files = os.listdir("data/")
    for file_name in files:
        if file_name.find(".srt") != -1:
            log.info("loading file %s", file_name)
            uid = file_name.replace(".srt", "")
            with open("data/{}".format(file_name), "r", encoding="utf-8") as srt:
                lines = srt.readlines()
                texts = []
                text = ""
                for line in lines:
                    if line == "\n":
                        texts.append(text)
                        text = ""
                    text += line.strip()
                i = 0
                transcripts = []
                for sec in texts:
                    offset = 1
                    if i < 9:
                        offset = 0
                    i += 1
                    time = sec[1 + offset : 30 + offset]
                    times = time.split(" --> ")
                    start_time = seconds_from_hours(times[0])
                    end_time = seconds_from_hours(times[1])
                    text = sec[30 + offset :]
                    transcripts.append(Transcript("", start_time, end_time, text, i))
                path_to_file = "data/{}.wav".format(uid)
                doc = Document(path_to_file, transcripts, uid)
                dbsession.add(doc)


def seconds_from_hours(hms):
    """
    Nol y nifer o eiliodau o hh:mm:ss,ss
    """
    a = hms.split(":")
    a[2] = a[2].replace(",", ".")
    return ((float(a[0]) * 60 * 60) + (float(a[1]) * 60) + float(a[2])) * 1000


def parse_args(argv):
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "config_uri",
        help="Configuration file, e.g., development.ini",
    )
    return parser.parse_args(argv[1:])


def main(argv=sys.argv):
    args = parse_args(argv)
    setup_logging(args.config_uri)
    env = bootstrap(args.config_uri)
    with env["request"].tm:
        dbsession = env["request"].dbsession
        setup_models(dbsession)
