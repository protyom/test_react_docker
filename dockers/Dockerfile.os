FROM python:3.7.6-alpine3.11

LABEL maintainer="trenada.app"


RUN apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/main \
    openssl
RUN apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing \
    gdal-dev \
    geos-dev \
    protobuf-c-dev
RUN apk add --no-cache \
    --update \
    g++ \
    gcc \
    jpeg-dev \
    zlib-dev \
    musl-dev \
    libffi-dev \
    libressl-dev \
    postgresql-dev \
    libstdc++ \
    libxslt-dev \
    freetype-dev \
    supervisor \
    linux-headers \
    mc
RUN apk add --update nodejs npm
RUN pip3 install uwsgi