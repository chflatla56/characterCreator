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

let topCount = 1;
let bottomCount = 6;
let shoeCount = 11;
let accessoryCount = 16;

function preload() {
  dogBase = loadImage(/*file*/);
  catBase = loadImage(/*file */);
  bunnyBase = loadImage(/*file*/);
  mouseBase = loadImage(/*file*/);
  frogBase = loadImage(/*file*/);

  dogOptions[0] = loadImage(/*dog pjs */);
  catOptions[0] = loadImage(/*cat pjs */);
  bunnyOptions[0] = loadImage(/*bunny pjs */);
  mouseOptions[0] = loadImage(/*mouseOptions */);
  frogOptions[0] = loadImage(/*frogOptions */);

  for (let i = 1; i <= 5; i++) {
    dogOptions[i] = loadImage(/*dog tops */);
    catOptions[i] = loadImage(/*cat tops */);
    bunnyOptions[i] = loadImage(/*bunny tops*/);
    mouseOptions[i] = loadImage(/*mouse tops */);
    frogOptions[i] = loadImage(/*frog tops */);
  }

  for (let j = 6; j <= 10; j++) {
    dogOptions[j] = loadImage(/*dog bottoms */);
    catOptions[j] = loadImage(/*cat bottoms */);
    bunnyOptions[j] = loadImage(/*bunny bottoms*/);
    mouseOptions[j] = loadImage(/*mouse bottoms */);
    frogOptions[j] = loadImage(/*frog bottoms */);
  }

  for (let k = 11; k <= 15; k++) {
    dogOptions[k] = loadImage(/*dog shoes */);
    catOptions[k] = loadImage(/*cat shoes */);
    bunnyOptions[k] = loadImage(/*bunny shoes*/);
    mouseOptions[k] = loadImage(/*mouse shoes */);
    frogOptions[k] = loadImage(/*frog shoes */);
  }

  for (let p = 16; p <= 19; p++) {
    dogOptions[p] = loadImage(/*dog accessories */);
    catOptions[p] = loadImage(/*cat accessories */);
    bunnyOptions[p] = loadImage(/*bunny accessories*/);
    mouseOptions[p] = loadImage(/*mouse accessories */);
    frogOptions[p] = loadImage(/*frog accessories */);
  }
}

function setup() {
  let canvas = createCanvas(1200, 800);
  canvas.parent("sketch");
}

function draw() {
  background(0);

  if (welcomePage) {
    drawWelcomePage();
  } else if (characterPage) {
    drawCharacterPage();
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
  image(dogBase, x, y);
}

function drawCat(x, y) {
  image(catBase, x, y);
}

function drawBunny(x, y) {
  image(bunnyBase, x, y);
}

function drawMouse(x, y) {
  image(mouseBase, x, y);
}

function drawFrog(x, y) {
  image(frogBase, x, y);
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

function drawOutfit(animal, x, y) {
  if (welcomePage) {
    image('animal'Tops[topsCount], x, y);
    image('animal'Bottoms[bottomsCount], x, y);
    image('animal'Shoes[shoeCount], x, y);
    image('animal'Accessories[accessoryCount], x, y);
  } else if (characterPage) {
    
  }
}

function mousePressed() {
  if (welcomePage) {
    if (/*coords*/) {
      dogPage = true;
      welcomePage = false;
      characterPage = true;
      savePage = false;
    } else if (/*coords*/) {
      catPage = true;
      welcomePage = false;
      characterPage = true;
      savePage = false;
    } else if (/*coords*/) {
      bunnyPage = true;
      welcomePage = false;
      characterPage = true;
      savePage = false;
    } else if (/*coords*/) {
      mousePage = true;
      welcomePage = false;
      charcterPage = true;
      savePage = false;
    } else if (/*coords*/){
      frogPage = true;
      welcomePage = false;
      characterPage = true;
      savePage = false;
    }
  }

  if (characterPage) {
    if (/*tops right button */) {
      if (topCount < 5) {
         topCount++;
      } else if (topCount == 5) {
        topCount = 1;
      }
    } else if (/*tops left button */) {
      if (topCount > 1) {
        topCount--;
      } else if (topCount == 1) {
        topCount = 5;
      }
    } else if (/*bottoms right button */) {
      if (bottomCount < 10) {
        bottomCount++;
      } else if (bottomCount == 10) {
        bottomCount = 6;
      }
    } else if (/*bottoms left button */) { 
      if (bottomCount > 6) {
        bottomCount--;
      } else if (bottomCount == 6) {
        bottomCount = 10;
      }
    } else if (/*shoe right button */) {
      if (shoeCount < 15) {
        shoeCount++;
      } else if (shoeCount == 15) {
        shoeCount = 11;
      }
    } else if (/*shoe left button */) {
      if (shoeCount > 11) {
        shoeCount--;
      } else if (shoeCount == 11) {
        shoeCount = 15;
      }
    } else if (/*accessory right button */) {
      if (accessoryCount < 19) {
        accessoryCount++;
      } else if (accessoryCount == 19) {
        accessoryCount = 16;
      }
    } else if (/*accessory left button */) {
      if (accessoryCount > 16) {
        accessoryCount--;
      } else if (accessoryCount == 16) {
        accessoryCount = 19;
      }
    }
   }
}