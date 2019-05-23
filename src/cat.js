const VirtualPet = require("../src/virtual-pet.js");

class Cat extends VirtualPet {
  constructor(energy, entertainment, hygiene, cage) {
    super(energy, entertainment, hygiene, cage);
  }
}

module.exports = Cat;
