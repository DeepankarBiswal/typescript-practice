function calculatePercentage(mark1:number, mark2:number, mark3:number) {
    return mark1 + mark2 + mark3 / 3;
}
let result = calculatePercentage(81, 87, 92)
console.log("The average is = " + result);
