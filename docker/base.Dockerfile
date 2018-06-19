FROM mhart/alpine-node:10.4.1

RUN apk update && \
	apk add nginx git build-base python bash && \
	mkdir -p /run/nginx
