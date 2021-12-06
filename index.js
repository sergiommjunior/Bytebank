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
checkingAccountRicardo.client = client1;
checkingAccountRicardo.deposit(500);

const account2 = new CheckingAccount();
account2.client = client2;
account2.agency = 102;

let value = 200;
checkingAccountRicardo.transfer(value, account2);

console.log(account2);
console.log(checkingAccountRicardo);


