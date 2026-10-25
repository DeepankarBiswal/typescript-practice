function checkAge(age:number) {
    if (age >= 25) {
        return "The candidate is old enuf!"
    }else{
        return "The candidate is underage!"
    }
}
let result = checkAge(26)
console.log(result);
