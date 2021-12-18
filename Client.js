export class Client {
    name;
    _ssn;

    get ssn(){
        return this._ssn;
    }

    constructor(name, ssn, password){
        this.name = name;
        this._ssn = ssn;
        this._password = password;
        this.verify = 1;
    }
    verify(){
        return true
    }
}