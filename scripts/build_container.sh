#!/usr/bin/env bash
IMAGE_NAME="fandom-react-boilerplate"
APP_VERSION=`git log -n 1 --pretty=format:%h`

# (re)build the container image
docker build --rm --file docker/base.Dockerfile --tag "${IMAGE_NAME}:${APP_VERSION}" --tag ${IMAGE_NAME}:latest .
