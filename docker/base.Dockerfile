FROM mhart/alpine-node:11.2.0

RUN apk update && \
	apk add nginx git build-base python bash && \
	mkdir -p /run/nginx
