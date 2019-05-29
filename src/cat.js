const OrganicPet = require("../src/organic-pet.js");

class Cat extends OrganicPet {
  constructor(energy, entertainment, hygiene, cage, litterBox = 50) {
    super(energy, entertainment, hygiene, cage);
    this._litterBox = litterBox;
  }
  get litterBox() {
    return this._litterBox;
  }
}

module.exports = Cat;
