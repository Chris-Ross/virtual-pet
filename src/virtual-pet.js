/* constructor(x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
};*/
class VirtualPet {
  constructor(
    name,
    cage,
    energy = 50,
    entertainment = 50,
    hygiene = 50,
    type = "organic",
    isAdopted = false
  ) {
    this._name = name;
    this._energy = energy;
    this._entertainment = entertainment;
    this._hygiene = hygiene;
    this._cage = cage;
    this._type = type;
    this._isAdopted = isAdopted;
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
  get type() {
    return this._type;
  }

  get isAdopted() {
    return this._isAdopted;
  }

  feed() {
    this._energy += 7;
    this._hygiene -= 2;
    this._entertainment -= 1;
  }
  play() {
    this._energy -= 2;
    this._hygiene -= 2;
    this._entertainment += 6;
  }
  bathe() {
    this._energy -= 2;
    this._hygiene += 7;
    this._entertainment += 1;
  }

  adopt() {
    return (this._isAdopted = true);
  }
}
module.exports = VirtualPet;
