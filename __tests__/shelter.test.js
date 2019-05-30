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

  test("should remove pet from shelter", () => {
    const pet1 = new VirtualPet("Bob", 101);
    underTest.addPet(pet1);
    const removedPet = underTest.removePet("Bob");

    expect(removedPet).toBe(pet1);
  });

  test("list all pets in shelter", () => {
    const pet = new VirtualPet("Sally", 101);
    const pet1 = new VirtualPet("Bob", 102);
    underTest.addPet(pet);
    underTest.addPet(pet1);

    const pets = underTest.pets;

    expect(JSON.stringify(pets)).toBe(JSON.stringify([pet, pet1]));
    // console.table(pets);
  });

  test("list specific pet in shelter", () => {
    const pet = new VirtualPet("Sally", 101);
    const pet1 = new VirtualPet("Bob", 102);
    const pet2 = new VirtualPet("Link", 103);
    underTest.addPet(pet);
    // underTest.addPet(pet1);
    // underTest.addPet(pet2);

    expect(pet.name).toBe("Sally");
    // expect(pet1.name).toBe("Bob");
    // expect(pet2.name).toBe("Link");
  });
});
