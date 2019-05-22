// Requirements
const Shelter = require("../src/shelter");
const Dog = require("../src/dog");

describe("Shelter and fxns", () => {
  let underTest;
  beforeEach(() => {
    underTest = new Shelter();
});
  test("Should return how many pets are in the shelter.", () => {
    const actual = underTest.pets;
    expect(actual).toEqual(6);
  });

  test("Should return cleanliness of the shelter.", () => {
    const actual = underTest.sanitation;
    expect(actual).toEqual(50);
  });

  test("Should return 'new' cleanliness of the shelter.", () => {
    underTest.sanitize();
    const actual = underTest.sanitation;
    expect(actual).toEqual(60);
  });

  test("should return shelter array length +1.", () => {
    underTest.addPet();
    const actual = underTest.pets;
    expect(actual).toEqual(4);
  });

  test("should return shelter array length -1.", () => {
    underTest.addPet();
    underTest.removePet();
    const actual = underTest.pets;
    expect(actual).toEqual(3);
  });

  test("should return dog in shelter.", () => {
    const underTest = new Shelter();
    underTest.addPet(Dog);
    const actual = underTest.pets;
    expect(actual).toEqual(4);
  });
});
