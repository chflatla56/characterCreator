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

function preload() {
  dogBase = loadImage("./animals/dog.PNG");
  catBase = loadImage("./animals/cat.PNG");
  bunnyBase = loadImage("./animals/bunny.PNG");
  mouseBase = loadImage("./animals/mouse.PNG");
  frogBase = loadImage("./animals/frog.PNG");

  //0, 6, 12, and 18 are the pjs

  /*
  for (let i = 0; i <= 5; i++) {
    dogOptions[i] = loadImage(/*dog tops );
    catOptions[i] = loadImage(/*cat tops );
    bunnyOptions[i] = loadImage(/*bunny tops);
    mouseOptions[i] = loadImage(/*mouse tops );
    frogOptions[i] = loadImage(/*frog tops );
  }

  for (let j = 6; j <= 11; j++) {
    dogOptions[j] = loadImage(/*dog bottoms );
    catOptions[j] = loadImage(/*cat bottoms );
    bunnyOptions[j] = loadImage(/*bunny bottoms);
    mouseOptions[j] = loadImage(/*mouse bottoms );
    frogOptions[j] = loadImage(/*frog bottoms );
  }

  for (let k = 12; k <= 17; k++) {
    dogOptions[k] = loadImage(/*dog shoes );
    catOptions[k] = loadImage(/*cat shoes );
    bunnyOptions[k] = loadImage(/*bunny shoes);
    mouseOptions[k] = loadImage(/*mouse shoes );
    frogOptions[k] = loadImage(/*frog shoes );
  }

  for (let p = 18; p <= 22; p++) {
    dogOptions[p] = loadImage(/*dog accessories );
    catOptions[p] = loadImage(/*cat accessories );
    bunnyOptions[p] = loadImage(/*bunny accessories);
    mouseOptions[p] = loadImage(/*mouse accessories );
    frogOptions[p] = loadImage(/*frog accessories );
  }
  */
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
  drawDog(0, 0);
  drawCat(100, 0);
  drawBunny(200, 0);
  drawMouse(300, 0);
  drawFrog(400, 0);
  pop();
}

function drawDogPage(){
  drawDog(400, 0);
  drawOutfit(dogOptions, 400, 0);
}

function drawCatPage() {
  drawCat(400, 0);
  drawOutfit(catOptions, 400, 0);
}

function drawBunnyPage() {
  drawBunny(x, y);
  drawOutfit(bunnyOptions, 400, 0);
}
 
function drawMousePage() {
  drawMouse(x, y);
  drawOutfit(mouseOptions, 400, 0);
}

function drawFrogPage() {
  drawFrog(x, y);
  drawOutfit(frogOptions, 400, 0);
}

function drawOutfit(animal, x, y) {
  let array = animal;
  if (welcomePage) {
    //i'm afraid it will infinitely generate numbers
    //how to fix? so they only run once, even when
    //called in draw func?
    let rand1 = int(random(1, 6));
    let rand2 = int(random(7, 12));
    let rand3 = int(random(13, 18));
    let rand4 = int(random(19, 23));
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
  /*
  if (welcomePage) {
    if (/*coords ) {
      if (/*coords) {
        dogPage = true;
        welcomePage = false;
        characterPage = true;
        savePage = false;
      } else if (/*coords) {
        catPage = true;
        welcomePage = false;
        characterPage = true;
        savePage = false;
      } else if (/*coords) {
        bunnyPage = true;
        welcomePage = false;
        characterPage = true;
        savePage = false;
      } else if (/*coords) {
        mousePage = true;
        welcomePage = false;
        charcterPage = true;
        savePage = false;
      } else if (/*coords){
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