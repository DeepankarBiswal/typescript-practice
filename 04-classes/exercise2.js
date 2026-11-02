"use strict";
class BankAccount {
    accountHolder;
    balance;
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    displayBalance() {
        console.log(this.accountHolder);
        console.log(this.balance);
    }
}
const account = new BankAccount("Deepankar", 13000);
account.deposit(2000);
account.displayBalance();
