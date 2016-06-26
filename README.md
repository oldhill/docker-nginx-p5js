# docker-nginx-p5js

(work in progress, more docs to come)

Builds an image with nginx serving a static site that has [p5.js](https://p5js.org/) installed.

- [optional] edit `index.js` and `p5.html` to whatever you want
- Build the image and run the container, mapping the container port 80 to your hosts's port 8080 (or whatever other port you want)
- Navigate to `<your docker IP>:8080/p5.html` in a browser on your host
