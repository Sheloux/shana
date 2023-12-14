class App {
  constructor() {
    this.setup();
  }

  setup() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);


    // this.circle = new Circle(0, 0, 0, this.ctx);
    this.centerCircle = new Circle(this.width / 2, this.height / 2, 100, this.ctx, " #e0ff14");

    this.allCircles = [];
    for (let i = 0; i < 1024; i++) {
      this.allCircles.push(
        /**
         * A CHOIX : utiliser un cercle ou un texte
         */
        new Circle(i * 2, window.innerHeight, 5, this.ctx, "white")
        // new Text(i * 2, window.innerHeight / 2, this.ctx)
      );

    }

    this.audioTool = new AudioTool();

    document.addEventListener("click", (e) => {
      this.audioTool.play(e);
    });
    // this.ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
    // this.ctx.rotate((90 * Math.PI) / 180);
    this.draw();
  }

  draw() {
    this.ctx.fillStyle = "rgba(100,100,100,5)";
    this.ctx.fillRect(0, 0, this.width, this.height);


    this.centerCircle.draw();
    this.allCircles.forEach((circle) => {
      circle.draw();

    });

    /**
     *  A CHOIX : analyser un des 3 types de data
     */
    this.audioTool.updateWaveForm();
    this.audioTool.updateFrequency();
    // this.audioTool.updatedFloatFrequency();

    /**
     *  A CHOIX : récupérer un des 3 types de tableau
     */
    const data2 = this.audioTool.dataWave;
    const data = this.audioTool.dataFrequency;
    // const data2 = this.audioTool.dataFloatFrequency;


    if (this.audioTool.audioContext) {
      for (let i = 0; i < data.length; i++) {
        /**
         * A CHOIX : modifier la position ou autre parametre
         */
        //this.allCircles[i].y = data[i] + window.innerHeight / 2 - 125;
        this.allCircles[i].y = -data[i] * 1.5 + window.innerHeight;
        this.allCircles[i].x = window.innerWidth / 2;
        // console.log(Math.abs(data[i] / 10));
        // this.allCircles[i].fontSize = -data[i] / 5;
        this.allCircles[i].radius = (+data[i] + window.innerHeight / 2) / 40;
        // this.centerCircle = (window.innerWidth / 2, window.innerHeight / 2, 100 + data[i], this.ctx);


      }
    }
    if (this.audioTool.audioContext) {
      for (let i = 0; i < data2.length; i++) {

        this.centerCircle.radius = (70 + data2[i]);

      }
    }


    requestAnimationFrame(this.draw.bind(this));
  }
}

window.onload = function () {
  const app = new App();
  //   console.log(app);
};
