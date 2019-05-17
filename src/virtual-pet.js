
/* constructor(x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
};*/
class VirtualPet {
    constructor(energy) {
        this._energy = energy;
    }
    get energy () {
        return this._energy;
    }
    eat(){
        this._energy += 10;
    }
}

module.exports = VirtualPet;