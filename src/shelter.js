// Requirements
// const Dog = require("../src/dog");
class Shelter {
  constructor(cleanliness = 50, pets = [1, 2, 3]) {
    this._pets = pets;
    pets = [];
    this._cleanliness = cleanliness;
  }
  get pets() {
    return this._pets.length;
  }
  get sanitation() {
    return this._cleanliness;
  }
  sanitize() {
    this._cleanliness += 10;
  }
  addPet(pet) {
    this._pets.push(pet);
  }
  removePet() {
    this._pets.pop();
  }
}

module.exports = Shelter;
