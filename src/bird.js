const OrganicPet = require("../src/organic-pet");

class Bird extends OrganicPet {
  constructor(energy, entertainment, hygiene, cage) {
    super(energy, entertainment, hygiene, cage);
  }
}

module.exports = Bird;
