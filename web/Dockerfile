FROM ubuntu:18.04

RUN apt-get update -q > docker-build.log 2>&1
RUN apt-get install -y -qq python python3 python3-pip python3-dev \
    build-essential nano libssl-dev ffmpeg sox alsa-utils \
    wget curl libmysqlclient-dev locales >> docker-build.log 2>&1

# Set the locale
RUN locale-gen cy_GB.UTF-8
ENV LANG cy_GB.UTF-8
ENV LANGUAGE cy_GB:en
ENV LC_ALL cy_GB.UTF-8

RUN mkdir -p /usr/src/app/app/alembic/versions
WORKDIR /usr/src/app

RUN wget -q https://yt-dl.org/downloads/latest/youtube-dl \
    -O /usr/local/bin/youtube-dl
RUN chmod a+rx /usr/local/bin/youtube-dl

COPY ./ /usr/src/app/

RUN python3 -m pip install --upgrade pip >> docker-build.log 2>&1
RUN pip3 install --no-cache-dir -r requirements.txt >> docker-build.log 2>&1

RUN pip3 install -e . >> docker-build.log 2>&1
