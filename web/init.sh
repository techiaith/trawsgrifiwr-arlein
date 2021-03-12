#!/bin/bash
if [ ! -f "app/transcriber/models/am.pbmm" ] && [ ! -f "app/transcriber/models/lm.scorer" ]; then \
  echo "no speech recognition models, fetching..."
  mkdir -p app/transcriber/models
  wget https://github.com/techiaith/docker-deepspeech-cy/releases/download/21.03/techiaith_bangor_21.03.pbmm -O app/transcriber/models/am.pbmm
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
