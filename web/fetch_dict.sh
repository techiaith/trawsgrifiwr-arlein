#!/bin/bash
while getopts ":r:" arg; do
  case $arg in
    r) RELEASE=$OPTARG;;
  esac
done
if [[ RELEASE == "" ]]; then
  echo "please provide a release tag -r 20.03"
  exit 0
fi
echo "fetching language models"
wget https://github.com/techiaith/docker-deepspeech-cy/releases/download/$RELEASE/techiaith_bangor_$RELEASE.pbmm -o app/transcriber/models/am.pbmm
wget https://github.com/techiaith/docker-deepspeech-cy/releases/download/$RELEASE/techiaith_bangor_transcribe_$RELEASE.scorer -o app/transcriber/models/lm.scorer
