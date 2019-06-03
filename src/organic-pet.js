const VirtualPet = require("../src/virtual-pet");

class OrganicPet extends VirtualPet {
  constructor(
    name,
    cage,
    energy,
    entertainment,
    hygiene,
    isAdopted,
    type = "organic"
  ) {
    super(name, cage, energy, entertainment, hygiene, isAdopted);
    this._type = type;
  }
  get petType() {
    return this._type;
  }
}
module.exports = OrganicPet;
