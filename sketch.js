let welcomePage = true;
let characterPage = false;
let savePage = false;
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

let topCount = 0;
let bottomCount = 6;
let shoeCount = 12;
let accessoryCount = 18;

let rand1;
let rand2;
let rand3;
let rand4;

function preload() {
  dogBase = loadImage("./animals/dog.PNG");
  catBase = loadImage("./animals/cat.PNG");
  bunnyBase = loadImage("./animals/bunny.PNG");
  mouseBase = loadImage("./animals/mouse.PNG");
  frogBase = loadImage("./animals/frog.PNG");

  //0, 6, 12, and 18 are the pjs

  /*
  for (let i = 0; i <= 5; i++) {
    dogOptions[i] = loadImage("./dog" + i + ".PNG");
    catOptions[i] = loadImage("./cat" + i + ".PNG");
    bunnyOptions[i] = loadImage("./bunny" + i + ".PNG");
    mouseOptions[i] = loadImage("./mouse" + i + ".PNG");
    frogOptions[i] = loadImage("./frog" + i + ".PNG");
  }

  for (let j = 6; j <= 11; j++) {
    dogOptions[j] = loadImage("./dog" + j + ".PNG");
    catOptions[j] = loadImage("./cat" + j + ".PNG");
    bunnyOptions[j] = loadImage("./bunny" + j + ".PNG");
    mouseOptions[j] = loadImage("./mouse" + j + ".PNG");
    frogOptions[j] = loadImage("./frog" + j + ".PNG");
  }

  for (let k = 12; k <= 17; k++) {
    dogOptions[k] = loadImage("./dog" + k + ".PNG");
    catOptions[k] = loadImage("./cat" + k + ".PNG");
    bunnyOptions[k] = loadImage("./bunny" + k + ".PNG");
    mouseOptions[k] = loadImage("./mouse" + k + ".PNG");
    frogOptions[k] = loadImage("./frog" + k + ".PNG");
  }

  for (let p = 18; p <= 22; p++) {
    dogOptions[p] = loadImage("./dog" + p + ".PNG");
    catOptions[p] = loadImage("./cat" + p + ".PNG");
    bunnyOptions[p] = loadImage("./bunny" + p + ".PNG");
    mouseOptions[p] = loadImage("./mouse" + p + ".PNG");
    frogOptions[p] = loadImage("./frog" + p + ".PNG");
  }
  */
}

function setup() {
  let canvas = createCanvas(1200, 800);
  canvas.parent("sketch");

  rand1 = int(random(1, 6));
  rand2 = int(random(7, 12));
  rand3 = int(random(13, 18));
  rand4 = int(random(19, 23));
}

function draw() {
  background(0);

  if (welcomePage) {
    drawWelcomePage();

    fill(255);
    textSize(50);
    text("five nights at fredder's", 100, 100);

  } else if (characterPage) {
    if (dogPage) {
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
}

function drawDog(x, y) {
  image(dogBase, x, y, 750, 750);
}

function drawCat(x, y) {
  image(catBase, x, y, 750, 750);
}

function drawBunny(x, y) {
  image(bunnyBase, x, y, 750, 750);
}

function drawMouse(x, y) {
  image(mouseBase, x, y, 750, 750);
}

function drawFrog(x, y) {
  image(frogBase, x, y, 750, 750);
}

function drawWelcomePage() {
  push();
  scale(0.8);
  drawDog(-225, 200);
  drawCat(75, 200);
  drawBunny(375, 200);
  drawMouse(675, 200);
  drawFrog(975, 200);
  pop();
}

function drawDogPage(){
  drawDog(200, 0);
  //drawOutfit(dogOptions, 400, 0);
}

function drawCatPage() {
  drawCat(200, 0);
  //drawOutfit(catOptions, 400, 0);
}

function drawBunnyPage() {
  drawBunny(200, 50);
  //drawOutfit(bunnyOptions, 400, 0);
}
 
function drawMousePage() {
  drawMouse(200, 0);
  //drawOutfit(mouseOptions, 400, 0);
}

function drawFrogPage() {
  drawFrog(200, 0);
  //drawOutfit(frogOptions, 400, 0);
}

function drawOutfit(animal, x, y) {
  let array = animal;
  if (welcomePage) {
    image(array[rand1], x, y);
    image(array[rand2], x, y);
    image(array[rand3], x, y);
    image(array[rand4], x, y);
  } else if (characterPage) {
    image(array[topCount], x, y);
    image(array[bottomCount], x, y);
    image(array[shoeCount], x, y);
    image(array[accessoryCount], x, y);
  }
}

function mousePressed() {
  if (welcomePage) {
    if (mouseY >= 235 && mouseY <= 690) {
      if (mouseX >= 10 && mouseX <= 230) {
        dogPage = true;
        welcomePage = false;
        characterPage = true;
        savePage = false;
      } else if (mouseX >= 250 && mouseX <= 460) {
        catPage = true;
        welcomePage = false;
        characterPage = true;
        savePage = false;
      } else if (mouseX >= 490 && mouseX <= 705) {
        bunnyPage = true;
        welcomePage = false;
        characterPage = true;
        savePage = false;
      } else if (mouseX >= 727 && mouseX <= 947) {
        mousePage = true;
        welcomePage = false;
        characterPage = true;
        savePage = false;
      } else if (mouseX >= 965 && mouseX <= 1192){
        frogPage = true;
        welcomePage = false;
        characterPage = true;
        savePage = false;
      }
    } 
  
  }

  /*
  if (characterPage) {
    if (/*right x coord ) {
      if (/*tops right button ) {
        if (topCount < 5) {
          topCount++;
        } else if (topCount == 5) {
          topCount = 1;
        }
      } else if (/*bottoms right button ) {
        if (bottomCount < 11) {
          bottomCount++;
        } else if (bottomCount == 11) {
          bottomCount = 7;
        }
      } else if (/*shoe right button/) {
        if (shoeCount < 17) {
          shoeCount++;
        } else if (shoeCount == 17) {
          shoeCount = 13;
        }
      } else if (/*accessory right button ) {
        if (accessoryCount < 22) {
          accessoryCount++;
        } else if (accessoryCount == 22) {
          accessoryCount = 19;
        }
      } 
    } else if (/*left x coord ) {
      if (/*tops left button) {
        if (topCount > 1) {
          topCount--;
        } else if (topCount <= 1) {
          topCount = 5;
        }
      } else if (/*bottoms left button) { 
        if (bottomCount > 7) {
          bottomCount--;
        } else if (bottomCount <= 7) {
          bottomCount = 11;
        }
      } else if (/*shoe left button ) {
        if (shoeCount > 13) {
          shoeCount--;
        } else if (shoeCount <= 13) {
          shoeCount = 17;
        }
      } else if (/*accessory left button ) {
        if (accessoryCount > 19) {
          accessoryCount--;
        } else if (accessoryCount <= 19) {
          accessoryCount = 22;
        }
      }
    }
   } */
}