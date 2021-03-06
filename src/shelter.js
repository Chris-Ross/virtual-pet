// Requirements
const OrganicPet = require("./organic-pet");
const Dog = require("../src/dog");
const Cat = require("../src/cat");
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
  listPets() {
    return this._pets;
  }
  selectPet(petName) {
    return this._pets[petName];
  }
  shelterTick() {
    return (this._cleanliness -= 3);
  }
  cleanLitterBox() {
    return Object.values(this._pets).map(pet => {
      if (pet instanceof Dog) {
        pet.cleanLitter();
      } else if (pet instanceof Cat) {
        pet.cleanLitter();
      }
    });
  }
  allPets() {
    Object.values(this._pets).forEach(pet => {
      if (pet instanceof OrganicPet) {
        pet.feed(), pet.play(), pet.bathe();
      } else {
        pet.fillOil(), pet.repairPet(), pet.feed(), pet.play(), pet.bathe();
      }
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
        console.log(`\n${pet.name} has max stats!`);
      }
    });
  }
  litterBoxTick() {
    return Object.values(this._pets).map(pet => {
      if (pet instanceof Dog) {
        pet.litterTick();
      } else if (pet instanceof Cat) {
        pet.litterTick();
      }
    });
  }
}

module.exports = Shelter;
