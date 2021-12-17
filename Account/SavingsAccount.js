import { Account } from "./Account.js";

export class SavingsAccount extends Account{
    constructor(openingBalance, client, agency){
        super(openingBalance, client, agency);
    }
    withdraw(value) {
        let tax = 1.02
        return this._withdraw(value, tax);
    }
}