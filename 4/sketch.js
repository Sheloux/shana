var w;
var h;
let shapeB;
var context;
const speechArray = ["Hej again", "did you notice me", "I'm blob", "it's me", "don't ignore me", "A good programmer always checks the consol", "HEEEEEEJJ", "notice me plz"];
const text = "Don't you see me speaking ?";
var posTx = 100;
var posTy = 100; 


function createCanvas(w, h) {
  var canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  context = canvas.getContext("2d");
  document.body.appendChild(canvas);
}

function setup() {

  w = window.innerWidth;
  h = window.innerHeight;
  createCanvas(w, h);
  document.addEventListener("click", mousePressed);

  x = w / 2;
  y = h / 2;
  shapeB = new ShapeB(x, y, context);

  context.fillStyle = 'black';
  context.font = '40px Montreal';
  draw();
}

function draw() {
  context.clearRect(0, 0, w, h);
  
  context.fillText(text, posTx, posTy);

  shapeB.display(context);


  requestAnimationFrame(draw);
}

function mousePressed(e) {

  //console.log("mousePressed", e);
  shapeB.Rdestination(e.x, e.y);
  shapeB.change();
  // DEBUG console.log("randomXY",e.x,e.y);

  var item = speechArray[Math.floor(Math.random() * speechArray.length)];

  posTx = Math.floor((Math.random()*w-100)+100);
  posTy = Math.floor((Math.random()*h-100)+100);
}
window.onload = function () {
  //console.log("on est pret");
  setup();
};
