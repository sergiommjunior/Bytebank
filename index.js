class Client{
    name;
    ssn;
}

class CheckingAccount{
    agency;
    balance;

    toWithdraw(withdraw){
        if(this.balance >= withdraw) {
            this.balance -= withdraw;
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
checkingAccountRicardo.balance = 0;
checkingAccountRicardo.agency = 1001;
console.log(checkingAccountRicardo.balance);
checkingAccountRicardo.balance = 100;
checkingAccountRicardo.toWithdraw(59);
console.log(checkingAccountRicardo.balance);





console.log(checkingAccountRicardo.balance);




console.log(client1);
console.log(client2)
