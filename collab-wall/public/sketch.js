let img;
let img2;
let img3;
let img4;
let img5;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("containerA");
  img = loadImage("https://i.imgur.com/SMHaUKp.png");
  img2 = loadImage("https://i.imgur.com/deS49jo.png");
  img3 = loadImage("https://i.imgur.com/5ylLFA4.png");
  // img4 = loadImage("https://i.imgur.com/2AjlLnZ.png");
  // img4 = loadImage("https://i.imgur.com/m1fTJIG.png");
  img4 = loadImage("https://i.imgur.com/ot2RqQi.png");
  img5 = loadImage("https://i.imgur.com/Wpzs21R.png");
  // frameRate(10); //to make it gradually disappear
}

function draw() {
  // image(img, 0, 0);
  // background('rgba(250,248,248, 0.4)');// to make it gradually disappear
<<<<<<< Updated upstream

  randomStuff();
=======
  // randomStuff();
>>>>>>> Stashed changes
}

function randomStuff() {
  var value = int(random(1, 6));
  var sizeRandom = int(random(50, 70));
  if (value == 1) {
    push();
    rotate(PI / int(random(-30, 30)));
    image(
      img,
      int(random(0, windowWidth)),
      int(random(0, windowHeight)),
      sizeRandom,
      sizeRandom
    );
    pop();
  } else if (value == 2) {
    push();
    rotate(PI / int(random(-30, 30)));
    image(
      img2,
      int(random(0, windowWidth)),
      int(random(0, windowHeight)),
      sizeRandom,
      sizeRandom
    );
    pop();
  } else if (value == 3) {
    push();
    rotate(PI / int(random(-30, 30)));
    image(
      img3,
      int(random(0, windowWidth)),
      int(random(0, windowHeight)),
      sizeRandom,
      sizeRandom
    );
    pop();
  } else if (value == 4) {
    push();
    rotate(PI / int(random(-30, 30)));
    image(
      img4,
      int(random(0, windowWidth)),
      int(random(0, windowHeight)),
      sizeRandom,
      sizeRandom
    );
    pop();
  }
  else if (value == 5) {
    push();
    rotate(PI / int(random(-30, 30)));
    image(img5, int(random(0, windowWidth)), int(random(0, windowHeight)), sizeRandom - 5, sizeRandom - 5);
    pop();
  }
}

// mouseMoved
function mousePressed() {
  // fill(255, 255, 255, 255);
  // ellipse(mouseX, mouseY, 50, 50);
  var value = int(random(1, 4));
  var sizeRandom = int(random(50, 70));
  if (value == 1) {
    image(img, mouseX - 25, mouseY - 25, sizeRandom, sizeRandom);
  } else if (value == 2) {
    image(img2, mouseX - 25, mouseY - 25, sizeRandom, sizeRandom);
  } else if (value == 3) {
    image(img3, mouseX - 25, mouseY - 25, sizeRandom, sizeRandom);
  } else if (value == 4) {
    image(img4, mouseX - 25, mouseY - 25, sizeRandom, sizeRandom);
  }
  else if (value == 5) {
    image(img5, mouseX - 25, mouseY - 25, sizeRandom - 5, sizeRandom - 5);
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
