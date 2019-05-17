const virtualPet = require("../src/virtual-pet.js");

describe('virtual pet', () => {
    let underTest;
    test('Should return energy stat', () => {
        const underTest = new virtualPet(100);
        const actual = underTest.energy;
        expect(actual).toEqual(100); 
    });

    test('When pet is fed energy should increase', () =>{
        const underTest = new virtualPet(10);
        underTest.eat();
        const actual = underTest.energy;
        expect(actual).toEqual(20);
    });
});