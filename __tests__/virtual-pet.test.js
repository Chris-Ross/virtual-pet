const virtualPet = require("../src/virtual-pet.js");

describe('virtual pet', () => {
    let underTest;
    test('Should return energy stat', () => {
        const underTest = new virtualPet(50, 50);
        const actual = underTest.energy;
        expect(actual).toEqual(50); 
    });

    test('When pet is fed energy should increase', () => {
        const underTest = new virtualPet(50, 50);
        underTest.eat();
        const actual = underTest.energy;
        // Here our toEqual is 60 because we are calling the eat method.
        expect(actual).toEqual(60);
    });

    test('When pet is played with entertainment should increase', () => {
        const underTest = new virtualPet(50, 50);
        const actual = underTest.entertainment;
        expect(actual).toEqual(50);
    });
});