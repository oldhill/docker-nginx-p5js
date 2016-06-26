// https://p5js.org/examples/examples/3D_Multiple_Lights.php

function setup(){
  createCanvas(710, 400, WEBGL);
}

function draw(){
  background(0);

  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;

  ambientLight(50);
  directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
  pointLight(0, 0, 200, locX, locY, 0);
  pointLight(200, 200, 0, -locX, -locY, 0);

  push();
  translate(-250, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  specularMaterial(250);
  box(100, 100, 100);
  pop();

  translate(250, 0, 0);
  ambientMaterial(250);
  sphere(120, 64);
}
