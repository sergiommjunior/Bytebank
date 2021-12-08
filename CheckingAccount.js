import { Client } from "./Client.js";

export class CheckingAccount {
    static accountCounter = 0;


    set client(param){
        if(param instanceof Client){
            this._client = param;
        }
    }

    get client(){
        return this._client;
    }

    get balance(){
        return this._balance;
    }

    constructor(agency, client){
        this.agency = agency;
        this.client = client;
        this._balance = 0;
        CheckingAccount.accountCounter += 1;
    }

    withdraw(value) {
        if (this._balance >= value) {
            this._balance -= value;
            return value;
        }
    }

    deposit(value) {
        if (value <= 0) {
            return;
        }
        this._balance += value;
    }

    transfer(value, account){
        const withdrawnAmount = this.withdraw(value);
        account.deposit(withdrawnAmount);
    }
}