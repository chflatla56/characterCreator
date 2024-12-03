let welcomePage = true;
let dogPage = false;
let catPage = false;
let bunnyPage = false;
let mousePage = false;
let frogPage = false;

let dogTops = [];
let dogBottoms = [];
let dogShoes = [];
let dogAccessories = [];

let catTops = [];
let catBottoms = [];
let catShoes = [];
let catAccessories = [];

let bunnyTops = [];
let bunnyBottoms = [];
let bunnyShoes = [];
let bunnyAccessories = [];

let mouseTops = [];
let mouseBottoms = [];
let mouseShoes = [];
let mouseAccessories = [];

let frogTops = [];
let frogBottoms = [];
let frogShoes = [];
let frogAccessories = [];

let dogOptions = [];
let catOptions = [];
let bunnyOptions = [];
let mouseOptions = [];
let frogOptions = [];

function preload() {

}

function setup() {
  createCanvas(1000, 600);
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

function drawDog(x, y, s) {

}

function drawCat(x, y, s) {

}

function drawBunny(x, y, s) {

}

function drawMouse(x, y, s) {

}

function drawFrog(x, y, s) {

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