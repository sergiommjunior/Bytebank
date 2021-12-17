import { Account } from "./Account.js";


export class SalaryAccount extends Account{
    constructor(client){
        super(0,client, 100)
    }

    withdraw(value) {
        let tax = 1.01
        return this._withdraw(value, tax);
    }
}