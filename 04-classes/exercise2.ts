class BankAccount {
    constructor(
        public accountHolder: string,
        public balance: number
    ) { }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    displayBalance(): void {
        console.log(this.accountHolder);
        console.log(this.balance);
    }
}

const account = new BankAccount("Deepankar", 13000);
account.deposit(2000);
account.displayBalance();