#!/usr/bin/env bash
ROOT_DIR=$PWD
IMAGE_NAME="fandom-react-boilerplate"
CONTAINER_NAME="fandom-react-boilerplate"
WEB_PORT=${FANDOM_BOILERPLATE_PORT:-8080}
NODE_DEBUG_PORT=${FANDOM_BOILERPLATE_DEBUG_PORT:-9876}

# 3001 = webpack hot reload
docker run \
  -it \
  --rm \
  --name "${CONTAINER_NAME}" \
  --publish "${WEB_PORT}":80 \
  --publish 3001:3001 \
  --publish 3000:3000 \
  --publish "${NODE_DEBUG_PORT}":9230 \
  --volume "${ROOT_DIR}/app:/app" \
  --volume "${ROOT_DIR}/docker/nginx:/nginx"\
  --volume "${ROOT_DIR}/scripts:/scripts"\
  "${IMAGE_NAME}" \
  sh -c "nginx -c /nginx/nginx.conf && cd app && sh"

# The above will block until we're done with the container
