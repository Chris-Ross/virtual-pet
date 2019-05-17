
/* constructor(x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
};*/
class VirtualPet {
    constructor(energy, entertainment) {
        this._energy = energy;
        this._entertainment = entertainment;
    };
    get energy() {
        return this._energy;
    };
    get entertainment() {
        return this._entertainment;
    };
    eat(){
        this._energy += 10;
    };
};
module.exports = VirtualPet;