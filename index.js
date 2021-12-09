import {Client} from "./Client.js";
import {CheckingAccount} from "./CheckingAccount.js";
import { SavingsAccount } from "./SavingsAccount.js";

const client1 = new Client("Ricardo", 11122233309);
const client2 = new Client("Alice", 88822233309);

const account1 = new CheckingAccount(client1, 1001);
const account2 = new CheckingAccount(client2, 102);

const savingsAccount1 = new SavingsAccount(50, client1, 1001);

account1.deposit(500);
account1.withdraw(100);

console.log(savingsAccount1)
console.log(account1);




