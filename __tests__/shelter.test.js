// Requirements
const Shelter = require("../src/shelter");

describe("Shelter and fxns", () => {
  test("Should return how many pets are in the shelter.", () => {
    const underTest = new Shelter();
    const actual = underTest.pets;
    expect(actual).toEqual(3);
  });

  test("Should return cleanliness of the shelter.", () => {
    const underTest = new Shelter();
    const actual = underTest.sanitation;
    expect(actual).toEqual(50);
  });

  test("Should return 'new' cleanliness of the shelter.", () => {
    const underTest = new Shelter();
    underTest.sanitize();
    const actual = underTest.sanitation;
    expect(actual).toEqual(60);
  });

  test("should return shelter array length +1.", () => {
    const underTest = new Shelter();
    underTest.addPet();
    const actual = underTest.pets;
    expect(actual).toEqual(4);
  });

  test("should return shelter array length -1.", () => {
    const underTest = new Shelter();
    underTest.addPet();
    underTest.removePet();
    const actual = underTest.pets;
    expect(actual).toEqual(3);
  });
});
