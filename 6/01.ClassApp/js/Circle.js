class Circle {
  constructor(x, y, radius, ctx, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.ctx = ctx;
    this.color = color;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;//"rgba(255,255,255,1)";
    this.ctx.fill();
    this.ctx.closePath();

  }
}
