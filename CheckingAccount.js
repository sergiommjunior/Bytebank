import { Account } from "./Account.js";
import { Client } from "./Client.js";

export class CheckingAccount extends Account {
    static accountCounter = 0;
    constructor(client, agency){
        super(0, client, agency)
        CheckingAccount.accountCounter += 1;
    }
}