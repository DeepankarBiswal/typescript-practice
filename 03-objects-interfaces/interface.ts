interface Employee {
    id: number;
    name: string;
    salary: number;
    email?: string;
}

let employee1: Employee = {
    id: 49,
    name: "AfterTheParty",
    salary: 29000
};
let employee2: Employee = {
    id: 101,
    name: "ian",
    salary: 99000
};
let employee3: Employee = {
    id: 102,
    name: "dan",
    salary: 129000
};

console.log(employee2.id);
console.log(employee1.name);
console.log(employee3.salary);

function displayEmployee(employee:Employee) {
    console.log("ID: " + employee.id );
    console.log("name: " + employee.name );
    console.log("salary: " + employee.salary );
    
}
displayEmployee(employee3);



