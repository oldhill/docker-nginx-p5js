# docker-nginx-p5js

### Summary

Dockerfile to build an image with an nginx server running pon port 80, serving a static site that has [p5.js](https://p5js.org/) installed.

**DISCLAIMER**: Docker can do some weird things to your system, so use all of this / run the below commands **at your own risk!**

### Requirements

Requires a working Docker installation to run. On MacOSX: [Docker Toolbox](https://www.docker.com/products/docker-toolbox), with the default VM running.

### Running the image from Dockerhub
TODO

### Building the image from scratch locally, and running that one

- Clone this repo
- _Optional:_ edit `index.js` and `p5.html` to whatever you want, or leave them as is for now.
- **Important:** `cd` to the `docker` directory to run the below commands.
- Build the image (make sure to run this from the `docker` directory, where the Dockerfile is):
```
$ docker build -t nginx-p5js .
```
- Run the container, mapping the container port 80 to your hosts's port 8080:
```
$ docker run -it -p 8080:80 nginx-p5js
```
- Navigate to `<your docker IP>:8080/p5.html` in a browser on your host, and you should see the 3D p5js demo page.
