import Camera from "./Camera.js";
import Grid from "./Grid.js";
import HandDetector from "./HandDetector.js";
// import Physics from "./matter-js";
// import Boid from "./Boid.js";
import ParticlesManager from "./ParticleManager.js";



export default class App {
  constructor() {
    console.log("App.js");
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.cam = new Camera();
    // this.physics = new Physics();
    this.handDetector = new HandDetector(this.cam.video, this.ctx);
    this.particles = new ParticlesManager(this.handDetector);
    this.handDetector.addEventListener(
      "ready",
      this.onHandDetectorReady.bind(this)
    );

  }

  onHandDetectorReady(e) {
    this.grid = new Grid(this.handDetector.ctx); // ce ctx pour desssiner ds d'autres classes
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.grid.draw(this.handDetector.finger);
    this.particles.animate(this.handDetector.finger);
    this.handDetector.detect();

    requestAnimationFrame(this.draw.bind(this));

  }
}
