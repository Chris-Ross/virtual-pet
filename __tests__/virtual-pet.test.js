const VirtualPet = require("../src/virtual-pet.js");
const Shelter = require("../src/shelter.js");

describe("virtual pet", () => {
  let underTest;
  test("Should return cage number", () => {
    const underTest = new VirtualPet("bob", 101);
    const actual = underTest.cage;
    expect(actual).toEqual(101);
  });

  test("Should return energy stat", () => {
    const underTest = new VirtualPet("bob", 101);
    const actual = underTest.energy;
    expect(actual).toEqual(50);
  });

  test("When pet is fed energy should increase", () => {
    const underTest = new VirtualPet("bob", 101);
    underTest.feed();
    const actual = underTest.energy;
    // Here our toEqual is 60 because we are calling the eat method.
    expect(actual).toEqual(60);
  });

  test("Should return entertainment stat && When pet is played with entertainment should increase", () => {
    const underTest = new VirtualPet("bob", 101);
    underTest.play();
    const actual = underTest.entertainment;
    expect(actual).toEqual(60);
  });
  test("Should return hygiene stat", () => {
    const underTest = new VirtualPet("bob", 101);
    const actual = underTest.hygiene;
    expect(actual).toEqual(50);
  });
  test("When pet is bathed, hygiene stat should increase", () => {
    const underTest = new VirtualPet("bob", 101);
    underTest.bathe();
    const actual = underTest.hygiene;
    expect(actual).toEqual(60);
  });
});
