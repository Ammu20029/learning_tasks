//function declaration with example
console.log("Function declaration of having default parameters a and b with example ")
function additionof2nums(a,b) {
    return a+b;
}
let result=additionof2nums(4,9);
console.log("sum:",result)
// function expression with example
console.log("function expression")
let addof2nums=function(c,d) {
    return c+d;
}
let sum=addof2nums(6,7)
console.log("6 and 7 are passed as arguments")
console.log("sum:",result)
let e=Number(prompt("enter the number"))
let f=Number(prompt("enter the number"))
let add2nums=function(e,f) {
    return e+f; // return statement is used to return the sum of e and f
}
let total=add2nums(e,f);
console.log("total:",total);
console.log("multiplication with return statement")
function multiplication(g,h) {
    return g*h;
}
let multi=multiplication(8,4);
console.log("multiplication:",multi);
function subtraction(i,j,...manymoreargs) {
    console.log("i",i);
    console.log("j",j);
    console.log("manymoreargs",manymoreargs);
}
subtraction("one", "two", "three", "four", "five", "six");
let myFunction=(a,b)=>a*b;
let arrow_multiplication=myFunction(4,3)
console.log("multiplication using arrow function",arrow_multiplication)
function modulus(m,n){
    let remainder = m%n;
    console.log("modulus is working inside the function",remainder);
}
modulus(22,7);
