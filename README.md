# docker-nginx-p5js

Dockerfile to build an image with an nginx server running on port 80, serving a static site that has [p5.js](https://p5js.org/) installed.

**DISCLAIMER**: use at your own risk!

### Requirements

Requires only a working Docker installation. On Mac OSX: [Docker Toolbox](https://www.docker.com/products/docker-toolbox), with the default VM running.

### Two options to run this as a container on your host:

### (1) Super quick start demo
- Run the following at your shell to pull the image from [Docker Hub](https://hub.docker.com/r/oldhill/nginx-p5js/) and run it in a container with a port mapped from the container to your host:
```
$ docker pull oldhill/nginx-p5js && docker run -it -p 8080:80 oldhill/nginx-p5js
```
- Navigate to `<your docker IP>:8080/p5.html` in a browser on your host to see the 3D demo.

### (2) Customize the static site, and build the image from scratch

- Clone this repo
- Edit `index.js` and `p5.html` to whatever you want, or leave them as is
- **Important:** `cd` to the `docker` directory to run the below commands
- Build the image (make sure to run this from the `docker` directory, where the `Dockerfile` is):
```
<in the docker-nginx-p5js/docker directory> $ docker build -t oldhill/nginx-p5js .
```
- Run the container, mapping the container port 80 to your hosts port 8080:
```
$ docker run -it -p 8080:80 oldhill/nginx-p5js
```
- Navigate to `<your docker IP>:8080/p5.html` in a browser on your host, and you should see the 3D p5js demo page.

### Troubleshooting

- On Mac OSX, you can find your docker IP with this docker-machine command:
```
$ docker-machine ip default
```
