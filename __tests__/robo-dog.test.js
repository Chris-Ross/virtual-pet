const VirtualPet = require("../src/virtual-pet.js");
const Shelter = require("../src/shelter.js");
const RoboDog = require("../src/robo-dog");

describe("RoboDog", () => {
  let underTest;
  test("Should return pet type", () => {
    const underTest = new RoboDog();
    const actual = underTest.type;
    expect(actual).toEqual("robotic");
  });

  test("Should return pet name", () => {
    const underTest = new RoboDog("fucker");
    const actual = underTest.name;
    expect(actual).toEqual("fucker");
  });

  test("Should return energy stat", () => {
    const underTest = new RoboDog("bob");
    const actual = underTest.energy;
    expect(actual).toEqual(50);
  });

  test("When pet is fed energy should increase", () => {
    const underTest = new RoboDog("bob");
    underTest.feed();
    const actual = underTest.energy;
    // Here our toEqual is 60 because we are calling the eat method.
    expect(actual).toEqual(60);
  });

  test("Should return entertainment stat && When pet is played with entertainment should increase", () => {
    const underTest = new RoboDog("bob");
    underTest.play();
    const actual = underTest.entertainment;
    expect(actual).toEqual(60);
  });
  
  test("Should return hygiene stat", () => {
    const underTest = new RoboDog("bob");
    const actual = underTest.hygiene;
    expect(actual).toEqual(50);
  });
  test("When pet is bathed, hygiene stat should increase", () => {
    const underTest = new RoboDog("bob");
    underTest.bathe();
    const actual = underTest.hygiene;
    expect(actual).toEqual(60);
  });
});
