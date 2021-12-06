export class CheckingAccount {
    agency;
    client;


    _balance = 0;

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