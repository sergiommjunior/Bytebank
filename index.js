import {Client} from "./Client.js";
import {CheckingAccount} from "./Account/CheckingAccount.js";
import { SavingsAccount } from "./Account/SavingsAccount.js";
import { SalaryAccount } from "./Account/SalaryAccount.js";
import { Manager } from "./Employee/Manager.js";
import { Director } from "./Employee/Director.js";
import { SystemAuthentication } from "./SystemAuthentication.js";


const client1 = new Client("Ricardo", 11122233309);
const client2 = new Client("Alice", 88822233309);
const account1 = new CheckingAccount(client1, 1001);
const account2 = new CheckingAccount(client2, 102);
const savingsAccount1 = new SavingsAccount(50, client1, 1001);
const salaryAccount1 = new SalaryAccount(50, client2, 100);
salaryAccount1.deposit(500);
salaryAccount1.withdraw(100);

const director1 = new Director("John", 10000, 100011122);
director1.registerPassword("123456789 ")
const manager1 = new Manager("Jake", 5000, 111222333);

const loggedIn = SystemAuthentication.login(director1, "123456789");

console.log(loggedIn);




