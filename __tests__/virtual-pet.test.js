const virtualPet = require("../src/virtual-pet.js");

describe('virtual pet', () => {
    let underTest;
    test('Should return hunger stat', () => {
        const underTest = new virtualPet(100);
        const actual = underTest.hunger;
        expect(actual).toBe(100); 
    });
});