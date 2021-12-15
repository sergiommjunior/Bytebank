import { Account } from "./Account.js";

export class CheckingAccount extends Account {
    static accountCounter = 0;
    constructor(client, agency){
        super(0, client, agency)
        CheckingAccount.accountCounter += 1;
    }

    //overwriting the behavior of the withdraw function
    withdraw(value) {
        let tax = 1.1
        return this._withdraw(value, tax);
    }
}