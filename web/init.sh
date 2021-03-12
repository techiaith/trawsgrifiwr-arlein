#!/bin/bash
if [ ! -f "app/transcriber/models/am.pbmm" ] && [ ! -f "app/transcriber/models/lm.scorer" ]; then \
  echo "no speech recognition models, fetching..."
  mkdir -p app/transcriber/models
  wget https://github.com/techiaith/docker-deepspeech-cy/releases/download/21.03/techiaith_bangor_21.03.pbmm -O app/tr$
  wget https://github.com/techiaith/docker-deepspeech-cy/releases/download/21.03/techiaith_bangor_transcribe_21.03.sco$
fi
echo "pip install -e ."
pip install -e . >> docker-build.log
