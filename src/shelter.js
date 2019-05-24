// Requirements
// const Dog = require("../src/dog");
class Shelter {
  constructor(cleanliness = 50) {
    this._pets = {};
    this._cleanliness = cleanliness;
  }
  get pets() {
    return Object.values(this._pets);
  }
  get sanitation() {
    return this._cleanliness;
  }
  get shelterSize() {
    return Object.keys(this._pets).length;
  }
  sanitize() {
    this._cleanliness += 10;
  }
  addPet(pet) {
    this._pets[pet.name] = pet;
  }
  removePet(petToBeDeleted) {
    const petToReturn = this._pets[petToBeDeleted];
    delete this._pets[petToBeDeleted];

    return petToReturn;
  }
  listPets() {
    return this._pets;
  }
}

module.exports = Shelter;
