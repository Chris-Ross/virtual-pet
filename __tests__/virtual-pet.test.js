const virtualPet = require("../src/virtual-pet.js");

describe('virtual pet', () => {
    let underTest;
    test('Should return hunger stat', () => {
        underTest = new virtualPet();
        const actual = underTest.parse('hunger');
        expect(actual).toEqual(100);
    });

    test('Should return instructions', () => {
        underTest = new virtualPet();
        const actual = underTest.parse('hungir');
        expect(actual).toBe('help');
    });
});