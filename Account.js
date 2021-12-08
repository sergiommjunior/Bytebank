export class Account{
    constructor(openingBalance, client, agency){
        this._balance = openingBalance;
        this._client = client;
        this._agency = agency;
    }

    withdraw(value) {
        if (this._balance >= value) {
            this._balance -= value;
            return value;
        }
    }

    deposit(value) {
        if (value <= 1000) {
            return;
        }
        this._balance += value;
    }

    transfer(value, account){
        const withdrawnAmount = this.withdraw(value);
        account.deposit(withdrawnAmount);
    }
}