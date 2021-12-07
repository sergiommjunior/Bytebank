export class Client {
    name;
    _ssn;

    get ssn(){
        return this._ssn;
    }

    constructor(name, ssn){
        this.name = name;
        this._ssn = ssn;
    }
}