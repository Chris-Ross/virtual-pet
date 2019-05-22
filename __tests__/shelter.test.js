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
    const Shelter1 = new VirtualPet(1, 1, 1, 1);
    underTest.addPet(Shelter1);
    expect(underTest.shelterSize).toEqual(1);
  });
});
