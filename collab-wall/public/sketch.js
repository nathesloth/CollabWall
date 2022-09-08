function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("containerA");
  background(220);
}

function draw() {}

function mousePressed() {
  fill(255, 255, 255, 255);
  ellipse(mouseX, mouseY, 20, 20);
  console.log("Clicked");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (windowHeight > windowWidth) {
    factor = windowHeight;
    factdiv = 1080;
  } else {
    factor = windowWidth;
    factdiv = 1920;
  }
}

draw();

assignToDiv();
