#!/bin/bash
echo "fetching language models"
wget https://github.com/techiaith/docker-deepspeech-cy/releases/download/21.01/techiaith_bangor_21.01.pbmm -o app/transcriber/models/lm.pbmm
wget https://github.com/techiaith/docker-deepspeech-cy/releases/download/21.01/techiaith_bangor_transcribe_21.01.scorer -o app/transcriber/models/lm.scorer
