FROM ubuntu:22.04

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Europe/London

RUN apt-get update -q --fix-missing
RUN apt-get install -y -qq apt-utils software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get update -q --fix-missing
RUN apt-get install -y -qq \
    tzdata build-essential git curl vim ca-certificates locales cmake zip pkg-config ffmpeg sox alsa-utils \
    libffi-dev libssl-dev libsndfile1 libbz2-dev liblzma-dev \
    libboost-all-dev libboost-tools-dev libboost-thread-dev \
    python3 python3-pip python3-setuptools python3-dev zlib1g-dev \
    default-libmysqlclient-dev
RUN apt-get clean -q

# Set the locale
RUN locale-gen cy_GB.UTF-8
ENV LANG cy_GB.UTF-8
ENV LANGUAGE cy_GB:en
ENV LC_ALL cy_GB.UTF-8

RUN mkdir -p /usr/src/app/app/alembic/versions
WORKDIR /usr/src/app
COPY ./ /usr/src/app/

RUN python3 -m pip install --upgrade pip
RUN pip3 install -r requirements.txt
RUN pip3 install -e .

## Install KenLM
RUN git clone https://github.com/kpu/kenlm.git /usr/local/src/kenlm
WORKDIR /usr/local/src/kenlm/build
RUN mkdir -p /usr/local/src/kenlm/build
RUN cmake ..
RUN make -j 4

# install ctc-decode
RUN git clone --recursive https://github.com/parlance/ctcdecode.git /tmp/ctcdecode
WORKDIR /tmp/ctcdecode
RUN pip3 install .

WORKDIR /usr/src/app