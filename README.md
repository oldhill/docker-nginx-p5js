# docker-nginx-p5js

Dockerfile to build an image with an nginx server running on port 80, serving a static site that has [p5.js](https://p5js.org/) installed.

### License
This repo includes an [MIT license](https://github.com/oldhill/docker-nginx-p5js/blob/master/LICENSE), but it is based on the official [nginx docker image](https://hub.docker.com/_/nginx/) which includes many pieces other software with their own licenses.

Use at your own risk! Have fun!

### Requirements

Requires only a working Docker installation. On Mac OSX: [Docker Toolbox](https://www.docker.com/products/docker-toolbox), with the default VM running.

### Two ways to use this:

#### (1) Super quick start demo
- Run the following at your shell to pull the image from [Docker Hub](https://hub.docker.com/r/oldhill/nginx-p5js/) and run it in a container:
```
$ docker pull oldhill/nginx-p5js && docker run -it -p 8080:80 oldhill/nginx-p5js
```
- Navigate to `<your docker IP>:8080/p5.html` in a browser to see the 3D demo.

#### (2) Customize the static site, and build the image from scratch on your host

- Note: before building Docker images from scratch, it's recommended to read [the official docs](https://docs.docker.com/engine/reference/builder/), since it's possible to accidentally add files to the image that you don't intend, or other things.
- Clone this repo
- Edit `index.js` and `p5.html` to whatever you want (some cool examples are [here](https://p5js.org/examples/)!)
- **Important:** `cd` to the `docker` directory to run the build command.
- Build the image (make sure to run this from the `docker` directory, where the `Dockerfile` is):
```
<in the docker-nginx-p5js/docker directory> $ docker build -t oldhill/nginx-p5js .
```
- Run the container, mapping the container port 80 to your host port 8080:
```
$ docker run -it -p 8080:80 oldhill/nginx-p5js
```
- Navigate to `<your docker IP>:8080/p5.html` in a browser on your host, and you should see the 3D p5js demo page or your customized page.

### Further customization

- To add more files to the static site nginx is serving, you could base your own Dockerfile on this one, and `COPY` more static files into the `/usr/share/nginx/html` directory.

### Troubleshooting

- On Mac OSX, you can find your docker IP with this docker-machine command:
```
$ docker-machine ip default
```
