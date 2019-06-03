const RoboticPet = require("./robotic-pet.js");

class RoboCat extends RoboticPet {
  constructor(name, cage, energy, entertainment, hygiene, type) {
    super(name, cage, energy, entertainment, hygiene, type);
  }
}

module.exports = RoboCat;
