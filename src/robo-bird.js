const RoboticPet = require("./robotic-pet.js");

class RoboBird extends RoboticPet {
  constructor(name, cage, energy, entertainment, hygiene, type) {
    super(name, cage, energy, entertainment, hygiene, type);
  }
}

module.exports = RoboBird;
