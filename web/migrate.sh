#!/bin/bash
echo "migrate_to_db development.ini"
migrate_to_db development.ini >> docker-build.log
