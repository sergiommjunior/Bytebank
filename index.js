class Client{
    name;
    ssn;
    agency;
    balance;
    rg;
}

const client1 = new Client();
const client2 = new Client();

client1.name = "Ricardo";
client1.ssn = 11122233309;
client1.agency = 1001;
client1.balance = 0;
client1.rg = 1234567890

client2.name = "Alice";
client2.ssn = 88822233309;
client2.agency = 1001;
client2.balance = 0;

console.log(client1, client2);
