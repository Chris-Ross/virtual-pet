/* constructor(x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
};*/
class VirtualPet {
  constructor(energy, entertainment, hygene) {
    this._energy = energy;
    this._entertainment = entertainment;
    this._hygene = hygene;
  }
  get energy() {
    return this._energy;
  }
  get entertainment() {
    return this._entertainment;
  }
  get hygene() {
    return this._hygene;
  }
  feed() {
    this._energy += 10;
  }
  play() {
    this._entertainment += 10;
  }
  bathe() {
    this._hygene += 10;
  }
}
module.exports = VirtualPet;
