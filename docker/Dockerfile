# Work in progress: serve static page with p5 installed
FROM nginx:latest

ENV P5_VERSION 0.5.2

WORKDIR /usr/share/nginx/html/js/lib

RUN apt-get update && apt-get install curl -y \
        && curl -LO https://github.com/processing/p5.js/releases/download/${P5_VERSION}/p5.dom.min.js \
        && curl -LO https://github.com/processing/p5.js/releases/download/${P5_VERSION}/p5.min.js \
        && curl -LO https://github.com/processing/p5.js/releases/download/${P5_VERSION}/p5.sound.min.js

COPY p5.html /usr/share/nginx/html
COPY index.js /usr/share/nginx/html/js
