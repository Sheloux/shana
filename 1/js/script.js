var i;
var backgroundColor;
var context;

var posX;
var posY;
var posXbl;
var posYbl;

var RL;
var spacingR = 30;
var Rwidth = 10;

var fillColor;

var style;

function createCanvas(width, height) {
  var canvas = document.createElement("canvas");
  context = canvas.getContext("2d");

  canvas.width = width;
  canvas.height = height;
  document.body.appendChild(canvas);
}

function setup() {
  console.log("setup");
  createCanvas(window.innerWidth, window.innerHeight);
  i = 0;

  document.addEventListener("click", mousePressed);
  

  draw();
}

function draw() {

  //   console.log("draw");
  i += 1;

  requestAnimationFrame(draw);

  var place = [Math.random() * 50, 8, 14, 34, 18];
  for (var n = 0; n <= place.length; n++) {

    blackLa(posXbl + place[n] * spacingR, posYbl);
    blackLb(posXbl + place[n] + 2 * spacingR, posYbl);

    blackLa(posXbl + place[n] * spacingR, posYbl);
    blackLb(posXbl + place[n] + 2 * spacingR, posYbl);
  }
  context.globalAlpha = 1;


}

function mousePressed() {
  backgroundColor = "white";
  console.log("mousePressed");

  posX = window.innerWidth / 7;
  posY = window.innerHeight / 7;
  RL = 500;
  posXbl = posX;
  posYbl = posY + 60;

  for (var i = 0; i <= 1350; i += spacingR) {
    //for (var j = 1; j <= 3; j++) {
    //console.log(i)

    context.fillStyle = "blue";
    rect(posX + i, posY, Rwidth, RL);


    //}
  }
  var place = [8, 14, 34, 18];
  for (var n = 0; n <= place.length; n++) {

    blackLa(posXbl + 8 * spacingR, posYbl);
    blackLb(posXbl + 14 * spacingR, posYbl);

    blackLa(posXbl + 18 * spacingR, posYbl);
    blackLb(posXbl + 24 * spacingR, posYbl);
  }
}
// var place = [Math.random()* 101,8,14,34,18];
// //context.translate(window.innerWidth/2,window.innerHeight/2);
// for (var n = 0; n <= place.length; n++) {
//   blackLa(posXbl + place[n] * spacingR, posYbl);
//   blackLb(posXbl + place[n] + 2* spacingR, posYbl);

//   blackLa(posXbl + place[n] * spacingR, posYbl);
//   blackLb(posXbl + place[n] + 2*spacingR, posYbl);

// }

function blackLa(x, y) {
  var bLL = RL / 4;

  for (var j = 0; j < 90; j += spacingR) {

    context.beginPath();
    context.moveTo(x + 5 + j, y);
    //1
    context.lineTo(x + 5 + j, y + bLL);
    //2
    context.lineTo(x - Rwidth - 15 + j, y + 2 * bLL);
    //3
    context.lineTo(x - Rwidth - 15 + j, y + 3 * bLL);
    //style
    context.lineWidth = 10;
    context.stroke();
    context.globalAlpha = 0.2;
    context.fillStyle = "black";
    context.closePath();

  }
}
function blackLb(x, y) {

  var bLL = RL / 4;

  for (var j = 0; j < 90; j += spacingR) {

    context.beginPath();
    context.moveTo(x + 5 + j, y);
    //1
    context.lineTo(x + 5 + j, y + bLL);
    //2
    context.lineTo(x - Rwidth + 45 + j, y + 2 * bLL);
    //3
    context.lineTo(x - Rwidth + 45 + j, y + 3 * bLL);
    //style
    context.lineWidth = 10;
    context.stroke();
    context.globalAlpha = 0.2;
    context.fillStyle = "black";
    context.closePath();

  }
}

function rect(x, y, w, h) {
  context.beginPath();
  context.rect(x, y, w, h);
  context.fill();
  context.closePath();
}
// function rectBlack(x) {
//   context.beginPath();
//   context.rect(x, posY+10,RL, Rwidth);
//   context.fillStyle = "black";
//   context.fill();
//   context.closePath()
// }

// function center() {
//   context.translate(window.innerWidth/2,window.innerHeight/2);

// }
window.onload = function () {
  console.log("on est pret");
  setup();
}
