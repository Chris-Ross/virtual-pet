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
    this._cleanliness += 13;
  }
  addPet(pet) {
    this._pets[pet.name] = pet;
  }
  allPets() {
    Object.values(this._pets).forEach(pet => {
      pet.feed(), pet.play(), pet.bathe();
    });
  }
  allPetStats() {
    return Object.values(this._pets).map(pet => {
      pet.energy, pet.hygiene, pet.entertainment;
      if (pet.energy < 0 || pet.hygiene < 0 || pet.entertainment < 0) {
        throw new Error("We will call PETA if you don't care for your pet!");
      } else if (
        pet.energy >= 100 ||
        pet.hygiene >= 100 ||
        pet.entertainment >= 100
      ) {
        console.log(`Your pet stats are full!`);
      }
    });
  }
  listPets() {
    return this._pets;
  }
  shelterTick() {
    return (this._cleanliness -= 3);
  }
}

module.exports = Shelter;

// removePet(petToBeDeleted) {
//   const petToReturn = this._pets[petToBeDeleted];
//   delete this._pets[petToBeDeleted];

//   return petToReturn;
// }
