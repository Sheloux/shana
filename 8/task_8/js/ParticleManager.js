import Boid from "./Boid.js";

export default class ParticlesManager {
    constructor(handDetector) {
        console.log("Particles");
        this.boids = [];
        this.handDetector = handDetector;
        this.ctx = this.handDetector.ctx
        this.ParticlesNbr = 100;

        for (let i = 0; i < this.ParticlesNbr; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const size = Math.random() * 20 + 10; // Random size between 5 and 15
            const boid = new Boid(x, y, size, this.ctx);
            // boid.changeColor(Math.random() * 255, Math.random() * 255, Math.random() * 255);
            this.boids.push(boid);
        }
    }


    animate(target) {
        this.boids.forEach(boid => {
            boid.flock(this.boids);
            boid.update(target);
            boid.display(target);

        });

    }

}