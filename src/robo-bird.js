const VirtualPet = require("./virtual-pet.js");

class RoboBird extends VirtualPet {
  constructor(name, cage, energy, entertainment, hygiene, type = "robotic") {
    super(name, cage, energy, entertainment, hygiene, type);
    this._type = type;
  }
}

module.exports = RoboBird;
