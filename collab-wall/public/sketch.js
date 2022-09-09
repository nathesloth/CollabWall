let img;
let img2;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("containerA");
  img = loadImage("https://i.imgur.com/SMHaUKp.png");
  img2 = loadImage("https://i.imgur.com/deS49jo.png");
}

function draw() {
  // image(img, 0, 0);
}

function mouseMoved() {
  fill(255, 255, 255, 255);
  // ellipse(mouseX, mouseY, 50, 50);
  var value = int(random(1, 3));
  if (value == 1) {
    image(img, mouseX - 25, mouseY - 25, 50, 50);
  }
  else if (value == 2) {
    image(img2, mouseX - 25, mouseY - 25, 50, 50);
  }

  console.log("Clicked");
}

function windowResized() {
  canvas.resizeCanvas(windowWidth, windowHeight);
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
