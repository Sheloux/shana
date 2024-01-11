import { HandLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
import { drawLandmarks } from "@mediapipe/drawing_utils";
import EventEmitter from "@onemorestudio/eventemitterjs";

export default class HandDetector extends EventEmitter {
  constructor(videoElement, ctx) {
    super();
    this.ctx = ctx;
    this.videoElement = videoElement;
    console.log("HandDetector.js");
    this.finger = { x: null, y: null };
    this.createHandLandmarker();
    this.color = `#DCDCDC`;
  }

  async createHandLandmarker() {
    const vision = await FilesetResolver.forVisionTasks("./wasm");

    this._handLandmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `./tasks/hand_landmarker.task`,
        delegate: "GPU",
      },
      runningMode: "VIDEO", // this.runningMode,
      numHands: 2,
    });

    // this.detect();
    this.emit("ready", []);
  }

  detect() {
    let startTimeMs = performance.now();
    const results = this._handLandmarker.detectForVideo(
      this.videoElement,
      startTimeMs
    );
    if (results.landmarks.length > 0) {
      //   console.log(results.landmarks);
      results.landmarks.forEach((pointsDeLaMain) => {
        drawLandmarks(this.ctx, pointsDeLaMain, { color: this.color, radius: 1 });
      });

      // je peux stocker les coordonnées du bout du doigt
      this.finger = results.landmarks[0][8];
      this.thumb = results.landmarks[0][4];

    } else {
      this.finger = { x: null, y: null };
      this.thumb = { x: null, y: null };

    }
    // const dist = this.dist(this.finger.x, this.finger.y, this.thumb.x, this.thumb.y);


  }
  dist(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  }
}
