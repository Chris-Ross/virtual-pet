

class VirtualPet {
    constructor(hunger) {
        this._hunger = hunger;
    }
    get hunger () {
        return this._hunger;
    }
    /*constructor(happiness) {
        this._happiness = happiness;
    }*/
}

module.exports = VirtualPet;