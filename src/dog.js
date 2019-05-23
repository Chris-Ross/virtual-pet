// Requirements
const VirtualPet = require("../src/virtual-pet.js");

class Dog extends VirtualPet {
  constructor(energy, entertainment, hygiene, cage) {
    super(energy, entertainment, hygiene, cage);
  }
  
}

module.exports = Dog;
