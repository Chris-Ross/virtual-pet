const virtualPet = require("../src/virtual-pet.js");

describe("virtual pet", () => {
  let underTest;
  test("Should return energy stat", () => {
    const underTest = new virtualPet(50, 50, 50);
    const actual = underTest.energy;
    expect(actual).toEqual(50);
  });

  test("When pet is fed energy should increase", () => {
    const underTest = new virtualPet(50, 50, 50);
    underTest.feed();
    const actual = underTest.energy;
    // Here our toEqual is 60 because we are calling the eat method(+10 when given 50).
    expect(actual).toEqual(60);
  });

  test("Should return entertainment stat && When pet is played with entertainment should increase", () => {
    const underTest = new virtualPet(50, 50, 50);
    underTest.play();
    const actual = underTest.entertainment;
    expect(actual).toEqual(60);
  });
  test("Should return hygene stat", () => {
    const underTest = new virtualPet(50, 50, 50);
    const actual = underTest.hygene;
    expect(actual).toEqual(50);
  });
  test("When pet is bathed, hygene stat should increase", () => {
    const underTest = new virtualPet(50, 50, 50);
    underTest.bathe();
    const actual = underTest.hygene;
    expect(actual).toEqual(60);
  });
});
