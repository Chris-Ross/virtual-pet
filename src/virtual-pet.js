/* constructor(x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
};*/
class VirtualPet {
  constructor(name, cage, energy = 50, entertainment = 50, hygiene = 50) {
    this._name = name;
    this._energy = energy;
    this._entertainment = entertainment;
    this._hygiene = hygiene;
    this._cage = cage;
  }
  get name() {
    return this._name;
  }
  get energy() {
    return this._energy;
  }
  get entertainment() {
    return this._entertainment;
  }
  get hygiene() {
    return this._hygiene;
  }
  get cage() {
    return this._cage;
  }
  feed() {
    this._energy += 10;
    this._hygiene -= 5;
    this._entertainment -= 5;
  }
  play() {
    this._entertainment += 10;
    this._energy -= 5;
    this._hygiene -= 5;
  }
  bathe() {
    this._hygiene += 10;
    this._entertainment -= 5;
    this._energy -= 5;
  }
}
module.exports = VirtualPet;
