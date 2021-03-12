#!/bin/bash
if [ ! -f "web/app/transcriber/models/lm.pbmm" "web/app/transcriber/models/lm.scorer" ]; then \
  echo "no language models, fetching..."
  wget https://github.com/techiaith/docker-deepspeech-cy/releases/download/21.03/techiaith_bangor_21.03.pbmm -O app/transcriber/models/lm.pbmm
  wget https://github.com/techiaith/docker-deepspeech-cy/releases/download/21.03/techiaith_bangor_transcribe_21.03.scorer -O app/transcriber/models/lm.scorer
fi
echo "pip install -e ."
pip install -e . >> docker-build.log
mkdir -p app/alembic/versions
echo "alembic -c development.ini revision --autogenerate -m 'init'"
alembic -c development.ini revision --autogenerate -m "init" >> docker-build.log
echo "alembic -c development.ini upgrade head"
alembic -c development.ini upgrade head >> docker-build.log
echo "initialize_app_db development.ini"
initialize_app_db development.ini >> docker-build.log
