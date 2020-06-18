const Gpio = require("onoff").Gpio;

class Well {
  constructor() {
    // Listen to GPIO
    const levelLowSensor = new Gpio(17, "in", "both");       // Edit the GPIO pin
    const levelMiddleSensor = new Gpio(27, "in", "both");    // Edit the GPIO pin
    const levelHighSensor = new Gpio(22, "in", "both");      // Edit the GPIO pin
    const levelFloodSensor = new Gpio(23, "in", "both");     // Edit the GPIO pin

    // Init values
    this.levelLow = 0;
    this.levelMiddle = 0;
    this.levelHigh = 0;
    this.levelFlood = 0;

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
    levelFloodSensor.watch((err, value) => {
      if (err) {
        console.error(err);
      }
      this.levelFlood = value;
    });

    // Stop gracefully with CTRL+C
    process.on("SIGINT", _ => {
      levelLowSensor.unexport();
      levelMiddleSensor.unexport();
      levelHighSensor.unexport();
      levelFloodSensor.unexport();
    });
  }
  getValues() {
    return {
      levelLow: this.levelLow,
      levelMiddle: this.levelMiddle,
      levelHigh: this.levelHigh,
      levelFlood: this.levelFlood
    };
  }
}

module.exports = Well;