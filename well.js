const Gpio = require("onoff").Gpio;

class Well {
  constructor() {
    // Listen to GPIO
    const levelLowSensor = new Gpio(4, "in", "both");
    const levelMiddleSensor = new Gpio(5, "in", "both");
    const levelHighSensor = new Gpio(6, "in", "both");

    // Init values
    this.levelLow = 0;
    this.levelMiddle = 0;
    this.levelHigh = 0;

    // Watch sensor level changes
    levelLowSensor.watch((err, value) => {
      if (err) {
        console.error(err);
      }
      this.levelLow = value;
    });
    levelMiddleSensor.watch((err, value) => {
      if (err) {
        console.error(err);
      }
      this.levelMiddle = value;
    });
    levelHighSensor.watch((err, value) => {
      if (err) {
        console.error(err);
      }
      this.levelHigh = value;
    });

    // Stop gracefully with CTRL+C
    process.on("SIGINT", _ => {
      levelLowSensor.unexport();
      levelMiddleSensor.unexport();
      levelHighSensor.unexport();
    });
  }
  getValues() {
    return {
      levelLow: this.levelLow,
      levelMiddle: this.levelMiddle,
      levelHigh: this.levelHigh
    };
  }
}

module.exports = Well;