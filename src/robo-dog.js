const VirtualPet = require("../src/virtual-pet.js");

class RoboDog extends VirtualPet {
  constructor(name, cage, energy, entertainment, hygiene, type = "robotic") {
    super(name, cage, energy, entertainment, hygiene, type);
    this._type = type;
  }
}

module.exports = RoboDog;
