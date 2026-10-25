function calculatePercentage(marks:number, totalMarks:number): number{
    return (marks / totalMarks) * 100;
}
let result = calculatePercentage(400,420)
console.log("The percentage is " + result);

