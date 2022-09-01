#!/bin/bash
if [ ! -f privkey.pem ]; then
  openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout privkey.pem -out cert.pem \
  -subj "/C=GB/ST=London/L=London/O=Global Security/OU=IT Department/CN=localhost"
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
python3 app/transcriber/model_init.py