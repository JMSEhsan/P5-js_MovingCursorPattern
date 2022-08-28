
// Source: https://p5js.org/examples/drawing-patterns.html
// I made some changes with regard to coloring

function setup() {
  createCanvas(1200, 600);
  background(118, 243, 231);
}

function draw() {
  // Call the variableEllipse() method and send it the
  // parameters for the current mouse position
  // and the previous mouse position
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

// The simple method variableEllipse() was created specifically
// for this program. It calculates the speed of the mouse
// and draws a small ellipse if the mouse is moving slowly
// and draws a large ellipse if the mouse is moving quickly

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed*Math.random(), speed*Math.random(), speed*Math.random());
  fill(speed*Math.random()*100, speed*Math.random()*100, speed*Math.random()*100);
  ellipse(x, y, speed, speed);
}

