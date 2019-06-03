// Requirements
const Shelter = require("../src/shelter");
const Dog = require("../src/dog");
const VirtualPet = require("../src/virtual-pet.js");

describe("Shelter and fxns", () => {
  let underTest;
  beforeEach(() => {
    underTest = new Shelter();
  });

  test("should add pet to shelter", () => {
    const pet1 = new VirtualPet(1, 1, 1, 1);
    underTest.addPet(pet1);
    expect(underTest.shelterSize).toEqual(1);
  });



  test("list all pets in shelter", () => {
    const pet = new VirtualPet("Sally", 101);
    const pet1 = new VirtualPet("Bob", 102);
    underTest.addPet(pet);
    underTest.addPet(pet1);

    const pets = underTest.pets;

    expect(JSON.stringify(pets)).toBe(JSON.stringify([pet, pet1]));
  });

  test("list specific pet in shelter", () => {
    const pet = new VirtualPet("Sally", 101);
    const pet1 = new VirtualPet("Bob", 102);
    const pet2 = new VirtualPet("Link", 103);
    underTest.addPet(pet);
    expect(pet.name).toBe("Sally");
  });
});
