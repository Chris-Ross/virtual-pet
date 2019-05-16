
let hunger = 100;
class VirtualPet {
    parse(string) {
        if (string === 'hunger') {
            return hunger;
        }
        if (string !== 'hunger') {
            return 'help';
        }
    }
}
module.exports = VirtualPet;