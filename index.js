import {Client} from "./Client.js";
import {CheckingAccount} from "./CheckingAccount.js";
import { SavingsAccount } from "./SavingsAccount.js";
import { Account } from "./Account.js";

const client1 = new Client("Ricardo", 11122233309);
const client2 = new Client("Alice", 88822233309);

const account1 = new Account(1001, client1);
const account2 = new Account(102, client2);

const savingsAccount1 = new Account(50, client1, 1001);

account1.deposit(500);
account1.withdraw(100);

console.log(savingsAccount1)
console.log(account1);




