FROM node:16-alpine

RUN apk update \
    && apk upgrade \
    && apk add bash

RUN mkdir -p /var/app
RUN adduser --disabled-password app && chown -R app:app /var/app

USER node
WORKDIR /var/app

RUN echo "alias ll='ls -l'" >> ~/.bashrc
RUN echo "alias la='ls -la'" >> ~/.bashrc
