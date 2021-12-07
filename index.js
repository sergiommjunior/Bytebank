import {Client} from "./Client.js"
import {CheckingAccount} from "./CheckingAccount.js"

const client1 = new Client("Ricardo", 11122233309);
const client2 = new Client("Alice", 88822233309);

const account1 = new CheckingAccount(1001, client1);
account1.deposit(500);
const account2 = new CheckingAccount(102, client2);

let value = 200;
account1.transfer(value, account2);

console.log(account1);
console.log(account2);
console.log(CheckingAccount.accountCounter)



