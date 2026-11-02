class bankAccount {
    accounHolder: string;
    balance: number;
    
    constructor(accountHolder:string, balance:number){
        this.accounHolder = accountHolder;
        this.balance = balance;
    }
    displayDetails(): void{
        console.log(this.accounHolder);
        console.log(this.balance);        
    }
}
let bankAccount1 = new bankAccount("Auro", 99999);
let bankAccount2 = new bankAccount("chinmaya", 999999);
bankAccount1.displayDetails();
bankAccount2.displayDetails();