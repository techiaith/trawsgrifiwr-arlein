import argparse
import logging
import random
import string
import sys

from pyramid.paster import bootstrap, setup_logging
from sqlalchemy.exc import OperationalError

from app.models.transcript import Transcript

log = logging.getLogger(__name__)
DB_UPDATE = """
    ALTER DATABASE trawsgrifiwr
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"""
TABLE_UPDATE = """
    ALTER TABLE transcript CONVERT TO
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"""


def setup_models(dbsession):
    """
    Add or update models / fixtures in the database.

    """
    dbsession.execute(DB_UPDATE)
    dbsession.execute(TABLE_UPDATE)
    # trans = dbsession.query(Transcript).all()
    # for tran in trans:
    #     tran.update(tran.correction)


def randomString(stringLength=8):
    letters = string.ascii_lowercase
    return "".join(random.choice(letters) for i in range(stringLength))


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

    try:
        with env["request"].tm:
            dbsession = env["request"].dbsession
            setup_models(dbsession)
    except OperationalError:
        print(
            """
Pyramid is having a problem using your SQL database.  The problem
might be caused by one of the following things:

1.  You may need to initialize your database tables with `alembic`.
    Check your README.txt for description and try to run it.

2.  Your database server may not be running.  Check that the
    database server referred to by the "sqlalchemy.url" setting in
    your "development.ini" file is running.
            """
        )
