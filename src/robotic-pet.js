const VirtualPet = require("../src/virtual-pet");

class RoboticPet extends VirtualPet {
  constructor(
    name,
    cage,
    energy,
    entertainment,
    hygiene,
    isAdopted,
    oil = 50,
    damage = 50,
    type = "robotic"
  ) {
    super(name, cage, energy, entertainment, hygiene, isAdopted);
    this._type = type;
    this._oil = oil;
    this._damage = damage;
  }
  get petType() {
    return this._type;
  }
  get oil() {
    return this._oil;
  }
  get damage() {
    return this._damage;
  }
  repairPet() {
    this._damage -= 7;
  }
  fillOil() {
    this._oil += 8;
  }
}
module.exports = RoboticPet;
