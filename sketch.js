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

function preload() {

}

function setup() {
  createCanvas(1200, 800);
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
  
}

function drawDogPage(){

}

function drawCatPage() {

}

function drawBunnyPage() {

}
 
function drawMousePage() {
  
}

function drawFrogPage() {

}