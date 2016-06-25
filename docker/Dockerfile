# Work in progress: basic docker image to serve static site with p5js installed
FROM debian

WORKDIR app

ADD https://github.com/processing/p5.js/archive/0.5.2.tar.gz /app

RUN tar -xzf 0.5.2.tar.gz && rm 0.5.2.tar.gz

ENTRYPOINT ["ls", "-al"]
