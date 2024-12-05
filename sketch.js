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

let click = false;

function preload() {
  dogBase = loadImage("./animals/dog.PNG");
  catBase = loadImage("./animals/cat.PNG");
  bunnyBase = loadImage("./animals/bunny.PNG");
  mouseBase = loadImage("./animals/mouse.PNG");
  frogBase = loadImage("./animals/frog.PNG");

  //0, 6, 12, and 18 are the pjs

  dogOptions[0] = loadImage("./dog0.PNG");
  dogOptions[6] = loadImage("./dog6.PNG");
  dogOptions[12] = loadImage("./dog12.PNG");
  
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
  drawDog(225, 0);
  drawButtons();
  drawOutfit(dogOptions, 225, 0);
}

function drawCatPage() {
  drawCat(225, 0);
  drawPage();
  drawOutfit(catOptions, 225, 0);
}

function drawBunnyPage() {
  drawBunny(225, 50);
  drawPage();
  drawOutfit(bunnyOptions, 225, 0);
}
 
function drawMousePage() {
  drawMouse(225, 0);
  drawPage();
  drawOutfit(mouseOptions, 225, 0);
}

function drawFrogPage() {
  drawFrog(225, 0);
  drawPage();
  drawOutfit(frogOptions, 225, 0);
}

function drawOutfit(arr, x, y) {
  if (welcomePage) {
    image(arr[rand1], x, y, 750, 750);
    image(arr[rand2], x, y, 750, 750);
    image(arr[rand3], x, y, 750, 750);
    image(arr[rand4], x, y, 750, 750);
  } else if (characterPage) {
    image(arr[shoeCount], x, y, 750, 750);
    image(arr[topCount], x, y, 750, 750);
    image(arr[bottomCount], x, y, 750, 750);
    image(arr[accessoryCount], x, y, 750, 750);
  }
}

function drawButtons() {
  textSize(30);
  for (let r = 0; r < 600; r = r + 150) {
    fill(255);
    rect(300, 150 + r, 50, 30);
    rect(850, 150 + r, 50, 30);
    fill(150);
    text("<~", 310, 176 + r);
    text("~>", 860, 176 + r);
  }

  fill(255);
  rect(25, 675, 150, 80);
  rect(1025, 675, 150, 80);
}

function speechBubble() {
  textSize(25);
  fill(255);
  rect(700, 200, 100, 125);
  triangle(725, 325, 750, 325, 725, 350);

  fill(0);
  rect(725, 280, 50, 25);

  text("ok!", 725, 305);
}

function drawPage() {
  if (click) {
    drawButtons();
  } else {
    speechBubble();
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

  if (characterPage) {
    if (mouseX >= 300 && mouseX <= 350) {
      if (mouseY >= 150 && mouseY <= 180) {
        if (topCount < 5) {
          topCount++;
        } else if (topCount == 5) {
          topCount = 1;
        }
      } else if (mouseY >= 300 && mouseY <= 330) {
        if (bottomCount < 11) {
          bottomCount++;
        } else if (bottomCount == 11) {
          bottomCount = 7;
        }
      } else if (mouseY >= 450 && mouseY <= 480) {
        if (shoeCount < 17) {
          shoeCount++;
        } else if (shoeCount == 17) {
          shoeCount = 13;
        }
      } else if (mouseY >= 600 && mouseY <= 630) {
        if (accessoryCount < 22) {
          accessoryCount++;
        } else if (accessoryCount == 22) {
          accessoryCount = 19;
        }
      } 
    } else if (mouseX >= 800 && mouseX <= 850) {
      if (mouseY >= 150 && mouseY <= 180) {
        if (topCount > 1) {
          topCount--;
        } else if (topCount <= 1) {
          topCount = 5;
        }
      } else if (mouseY >= 300 && mouseY <= 330) { 
        if (bottomCount > 7) {
          bottomCount--;
        } else if (bottomCount <= 7) {
          bottomCount = 11;
        }
      } else if (mouseY >= 450 && mouseY <= 480) {
        if (shoeCount > 13) {
          shoeCount--;
        } else if (shoeCount <= 13) {
          shoeCount = 17;
        }
      } else if (mouseY >= 600 && mouseY <= 630) {
        if (accessoryCount > 19) {
          accessoryCount--;
        } else if (accessoryCount <= 19) {
          accessoryCount = 22;
        }
      }
    }
   }

   if (characterPage) {
      if (mouseX >= 725 && mouseX <= 775 && mouseY >= 280 && mouseY <= 305) {
        click = true;
      }
   }

   if(characterPage) {
      if (mouseY >= 675 && mouseY <= 755) {
        if(mouseX >= 25 && mouseX <= 175) {
          welcomePage = true;
          savePage = false;
          characterPage = false;
          dogPage = false;
          catPage = false;
          bunnyPage = false;
          mousePage = false;
          frogPage = false;
        } else if (mouseX >= 1025 && mouseX <= 1175) {
          welcomePage = false;
          savePage = true;
          characterPage = false;
        }
      }
   }
}