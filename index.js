import {Client} from "./Client.js"
import {CheckingAccount} from "./CheckingAccount.js"
const client1 = new Client();
client1.name = "Ricardo";
client1.ssn = 11122233309;

const client2 = new Client();
client2.name = "Alice";
client2.ssn = 88822233309;

const checkingAccountRicardo = new CheckingAccount();
checkingAccountRicardo.agency = 1001;

checkingAccountRicardo.deposit(100);

checkingAccountRicardo.deposit(300);

const withdraw = checkingAccountRicardo.withdraw(50);

console.log(checkingAccountRicardo);

console.log(client1);
console.log(client2)
