class Employee {
    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    displayDetails(): void {
        console.log(this.id);
        console.log(this.name);
        console.log(this.salary);
    }
}
let employee1 =new Employee(1,"Medusa" ,67000);
let employee2 =new Employee(2,"Nikolas" ,99000);
let employee3 =new Employee(3,"Percy" ,98200);
employee1.displayDetails();
employee2.displayDetails();
employee3.displayDetails();

