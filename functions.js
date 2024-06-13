// FUNCTIONS

// Draw Start Screen
function drawStart() {
  drawMainComponents();

  // Start Text
  ctx.font = "40px Consolas";
  ctx.fillStyle = "lightblue";
  ctx.fillText("CLICK TO START", 350, 285);

  ctx.font = "25px Consolas";
  ctx.fillText("CLICK AND HOLD LEFT MOUSE BUTTON TO GO UP", 100, 450);
  ctx.fillText("RELEASE TO GO DOWN", 415, 480);
}

function runGame() {
  //logic
  moveHeli();
  moveWalls();
  CheckCollisions();
  //draw
  drawGame();
}
function moveHeli() {
  //accel upwards if mouse is pressed\
  if (mouseIsPressed) {
    heli.speed += -1;
  }

  //apply gravity
  heli.speed += heli.accel;

  //ocnstrain speed
  if (heli.speed > 5) {
    heli.speed = 5;
  } else if (heli.speed < -5) {
    heli.speed = -5;
  }

  //move heli by its speeed
  heli.y += heli.speed;
}

function moveWalls() {
  //wall 1
  wall1.x += -3;
  if (wall1.x + wall1.w < 0) {
    wall1.x = wall3.x + 500;
    wall1.y = Math.random() * 300 + 100;
  }

  //wall2
  wall2.x += -3;
  if (wall2.x + wall2.w < 0) {
    wall2.x = wall1.x + 500;
    wall2.y = Math.random() * 300 + 100;
  }

  //wall3
  wall3.x += -3;
  if (wall3.x + wall3.w < 0) {
    wall3.x = wall2.x + 500;
    wall3.y = Math.random() * 300 + 100;
  }
}

function CheckCollisions() {
  //collision with top and bottom green bars
  if (heli.y < 50) {
    gameOver();
  }

  //collision with the walls
}

function gameOver() {
  state = "gameover";

  setTimeout(reset, 2000);
  //set time out is sort of a event listener
}

// Draw Game Elements
function drawGame() {
  drawMainComponents();

  drawWalls();
}

// Draw Game Over Screen
function drawGameOver() {
  drawMainComponents();

  drawWalls();

  // Circle around Helicopter
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(heli.x + heli.w / 2, heli.y + heli.h / 2, 60, 0, 2 * Math.PI);
  ctx.stroke();

  // Game Over Text
  ctx.font = "40px Consolas";
  ctx.fillStyle = "lightblue";
  ctx.fillText("GAME OVER", 350, 285);
}

//HELPER FUNCTIONS
function reset() {
  state = "start";

  //global variables(reset)
  let state = "start";
  let heli = {
    x: 200,
    y: 250,
    w: 80,
    h: 40,
    speed: -10,
    accel: 0.5,
  };
  let wall1 = {
    x: cnv.width,
    y: Math.random() * 300 + 100,
    w: 50,
    h: 100,
  };

  let wall2 = {
    x: cnv.width + 500,
    y: Math.random() * 300 + 100,
    w: 50,
    h: 100,
  };

  let wall3 = {
    x: cnv.width + 1000,
    y: Math.random() * 300 + 100,
    w: 50,
    h: 100,
  };
}

function drawWalls() {
  ctx.fillStyle = "green";
  ctx.fillRect(wall1.x, wall1.y, wall1.w, wall1.h);
  ctx.fillRect(wall2.x, wall2.y, wall2.w, wall2.h);
  ctx.fillRect(wall3.x, wall3.y, wall3.w, wall3.h);
}

function drawMainComponents() {
  // Background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Green Bars
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, cnv.width, 50);
  ctx.fillRect(0, cnv.height - 50, cnv.width, 50);

  // Green Bar Text
  ctx.font = "30px Consolas";
  ctx.fillStyle = "black";
  ctx.fillText("HELICOPTER GAME", 25, 35);
  ctx.fillText("DISTANCE: 0", 25, cnv.height - 15);
  ctx.fillText("BEST: 0", cnv.width - 250, cnv.height - 15);

  // Helicopter
  ctx.drawImage(heliImg, heli.x, heli.y);
}
