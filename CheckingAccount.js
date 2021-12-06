export class CheckingAccount {
    agency;
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
}