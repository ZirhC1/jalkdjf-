// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables(once)
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";
let mouseIsPressed = false;

//global variables(reset)
let state;
let heli;

let wall1;

let wall2;

let wall3;

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameon") {
    runGame();
  } else if (state === "gameover") {
    drawGameOver();
  }

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler() {
  //triple equal is used if equal/equivalent
  //one equal is used to assign

  mouseIsPressed = true;
  //start game on mousedown
  if (state === "start") {
    state = "gameon";
  }
}

function mouseupHandler() {
  mouseIsPressed = false;
}
