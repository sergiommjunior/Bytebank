import { Client } from "./Client.js";

export class CheckingAccount {
    agency;
    _client;

    set client(param){
        if(param instanceof Client){
            this._client = param;
        }
    }

    get client(){
        return this._client;
    }


    _balance = 0;

    get balance(){
        return this._balance;
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