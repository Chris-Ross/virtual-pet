class VirtualPet {
  constructor(
    name,
    cage,
    energy = 50,
    entertainment = 50,
    hygiene = 50,
    isAdopted = false
  ) {
    this._name = name;
    this._energy = energy;
    this._entertainment = entertainment;
    this._hygiene = hygiene;
    this._cage = cage;
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

  get isAdopted() {
    return this._isAdopted;
  }

  feed() {
    this._energy += 5;
  }
  play() {
    this._entertainment += 5;
  }
  bathe() {
    (this._hygiene += 5), (this._energy -= 10);
  }

  adopt() {
    return (this._isAdopted = true);
  }
}
module.exports = VirtualPet;
