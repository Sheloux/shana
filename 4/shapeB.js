class ShapeB {
  constructor(x, y, context) {
    this.context = context;
    this.originX = x;
    this.originY = y;

    this.x = x;
    this.y = y;

    this.PointR = 3;
    this.r = 5;
    this.xOff = 0;
    this.yOff = 0;
    this.xOffset = 0;
    this.yOffset = 0;

    this.uniteDeT = 0;
    this.moveTo = { x: x, y: y };

  }
  Rdestination(x, y) {
    this.moveTo = { x: x, y: y };
    this.uniteDeT = 0;

  }
  change() {

    const easing = Easing.cubicIn(this.uniteDeT);
    this.uniteDeT += 0.0005;

    let distX = this.moveTo.x - this.originX;
    let distY = this.moveTo.y - this.originY;
    this.originX = this.originX + distX * easing;
    this.originY = this.originY + distY * easing;

    // console.log("origin",this.originX,this.originY);
    // console.log("this.x,this.y",this.y,this.y);
  }


  display() {
    this.context.fillStyle = "yellow";


    for (var a = 0; a < 360; a += 5) {

      this.xOffset += 0.002 / 36;
      this.yOffset += 0.005 / 36;

      var nx = noise(this.xOffset + a) * 40;
      var ny = noise(this.yOffset + a) * 70;

      this.x = this.originX + Math.cos(a * (Math.PI / 180)) * this.r; // PI/180 = convertir de degré en radians
      this.y = this.originY + Math.sin(a * (Math.PI / 180)) * this.r;


      this.circle(this.x + nx, this.y + ny, this.PointR);
      this.change();
      this.context.fill();



    }

    // EYES 

    this.context.fillStyle = "white";

    let spacing = 15;
    this.circle(this.x + spacing, this.y, 17);
    this.context.fill();
    this.context.stroke();

    this.circle(this.x - spacing, this.y, 17);
    this.context.fill();
    this.context.stroke();

    this.context.fillStyle = "black";

    this.circle(this.x + spacing +nx, this.y, 5);
    this.context.stroke();
    this.context.fill();
    this.circle(this.x - spacing +nx , this.y, 5);
    this.context.stroke();
    this.context.fill();


    //


  }
  //fonctions autres 
  dist(x1, y1, x2, y2) {
    // calcule la distance entre deux points
    // pythagore power
    let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    return d;
  }
  circle(x, y, radius) {
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, 2 * Math.PI, true);
    this.context.closePath();
  }
}
