FROM mhart/alpine-node:9.5.0

RUN apk update && \
	apk add nginx git build-base python bash && \
	mkdir -p /run/nginx
