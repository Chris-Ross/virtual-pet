const VirtualPet = require("../src/virtual-pet.js");

class Bird extends VirtualPet {
  constructor(energy, entertainment, hygiene, cage) {
    super(energy, entertainment, hygiene, cage);
  }
}

module.exports = Bird;
