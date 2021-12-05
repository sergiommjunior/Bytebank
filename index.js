class Client{
    name;
    ssn;
}

class CheckingAccount{
    agency;
    _balance = 0;

    withdraw(value){
        if(this._balance >= value) {
            this._balance -= value;
        }  
    }

    deposit(value){
        if(value > 0){
            this._balance += value;
        }
    }
}


const client1 = new Client();
client1.name = "Ricardo";
client1.ssn = 11122233309;

const client2 = new Client();
client2.name = "Alice";
client2.ssn = 88822233309;

const checkingAccountRicardo = new CheckingAccount();
checkingAccountRicardo.agency = 1001;

checkingAccountRicardo.deposit(100);
checkingAccountRicardo.withdraw(50);
checkingAccountRicardo.deposit(300);


console.log(checkingAccountRicardo);

console.log(client1);
console.log(client2)
