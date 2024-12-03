let welcomePage = true;
let dogPage = false;
let catPage = false;
let bunnyPage = false;
let mousePage = false;
let frogPage = false;

let dogOptions = [];
let catOptions = [];
let bunnyOptions = [];
let mouseOptions = [];
let frogOptions = [];

let dogBase;
let catBase;
let bunnyBase;
let mouseBase;
let frogBase;

function preload() {
  dogBase = loadImage(/*file*/);
  catBase = loadImage(/*file */);
  bunnyBase = loadImage(/*file*/);
  mouseBase = loadImage(/*file*/);
  frogBase = loadImage(/*file*/);

  dogOptions[0] = loadImage(/*dog pjs */);
  catOptions[0] = loadImage(/*cat pjs */);
  bunnyOptions[0] = loadImage(/*bunny pjs */);
  
}

function setup() {
  let canvas = createCanvas(1200, 800);
  canvas.parent("sketch");
}

function draw() {
  background(0);

  if (welcomePage) {
    drawWelcomePage();
  } else if (dogPage) {
    drawDogPage();
  } else if (catPage) {
    drawCatPage();
  } else if (bunnyPage) {
    drawBunnyPage();
  } else if (mousePage) {
    drawMousePage();
  } else if (frogPage) {
    drawFrogPage();
  } else {
    drawWelcomePage();
  }
}

function drawDog(x, y) {

}

function drawCat(x, y) {

}

function drawBunny(x, y) {

}

function drawMouse(x, y) {

}

function drawFrog(x, y) {

}

function drawWelcomePage() {
  push();
  scale(0.8);
  //drawDog(x, y);
  //drawCat(x, y);
  //drawBunny(x, y);
  //drawMouse(x, y);
  //drawFrog(x, y);
  pop();
}

function drawDogPage(){
  //drawDog(x, y);
}

function drawCatPage() {
  //drawCat(x, y);
}

function drawBunnyPage() {
  //drawBunny(x, y);
}
 
function drawMousePage() {
  //drawMouse(x, y);
}

function drawFrogPage() {
  //drawFrog(x, y);
}

function mousePressed() {
  if (welcomePage) {
    if (/*coords*/) {
      dogPage = true;
      welcomePage = false;
    } else if (/*coords*/) {
      catPage = true;
      welcomePage = false;
    } else if (/*coords*/) {
      bunnyPage = true;
      welcomePage = false;
    } else if (/*coords*/) {
      mousePage = true;
      welcomePage = false;
    } else if (/*coords*/){
      frogPage = true;
      welcomePage = false;
    }
  }
}