#!/bin/bash
echo "pip install -e ."
pip install -e . >> docker-build.log
mkdir -p app/alembic/versions
echo "alembic -c development.ini revision --autogenerate -m 'init'"
alembic -c development.ini revision --autogenerate -m "init" >> docker-build.log
echo "alembic -c development.ini upgrade head"
alembic -c development.ini upgrade head >> docker-build.log
echo "initialize_app_db development.ini"
initialize_app_db development.ini >> docker-build.log
