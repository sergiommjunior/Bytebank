import { Account } from "./Account";

export class SalaryAccount extends Account{
    constructor(client){
        super(0,this,client, 100)
    }

    withdraw(value) {
        let tax = 1.01
        return this._withdraw(value, tax);
    }
}