import { Account } from "./Account.js";

export class SavingsAccount extends Account{
    constructor(openingBalance, client, agency){
        super(openingBalance, client, agency);
    }
}