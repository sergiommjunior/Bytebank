import { Account } from "./Account.js";
import { Client } from "./Client.js";

export class CheckingAccount extends Account {
    static accountCounter = 0;
    constructor(client, agency){
        super(0, client, agency)
        CheckingAccount.accountCounter += 1;
    }

    withdraw(value) {
        let tax = 1.1
        const withdrawnAmount = tax * value;
        if (this._balance >= withdrawnAmount) {
            this._balance -= withdrawnAmount;
            return withdrawnAmount;
        }
    }
}