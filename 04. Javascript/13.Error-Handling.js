function greetUser(name){
    console.log("Hello,"+name)
}
greetUser("Alice")

// runtime errors
let number=42;
try{
    console.log(number.toUpperCase());
}catch (err) {
    console.log("caught runtime error:", err.message);
}


//logical errors
let numbers=[1,2,3,4,5];
for (let i=0;i<=numbers.length;i++){
    console.log(numbers[i]);
}
// try,catch,finally
function dividenum(a,b){
    try{
        let num1=number(a);
        let num2=numbers(b);
        
        // checks for invalid numbers
        if(isNaN(num1)|| isNaN(num2)){
            throw new Error("inputs must be valid");
        }
        if (num2==0){
            throw new Error("cannot divide by zero");
        }
        let result=num1/num2;
        console.log("Result:", result);
    } catch(err){
        console.log("caught error",err.message);
    } finally {
        console.log("Division is done");
    }
}
dividenum(10,2);
dividenum(10,0);
dividenum("ten",2);

// throw
function InputValidation(input) {
    if (input < 0) {
        throw new Error("Input must be a positive number");
    }
    return "Valid input";
}

try {
    console.log(InputValidation(5));    // Valid input
    console.log(InputValidation(-3));   // Will throw
} catch (err) {
    console.log("Error caught:", err.message);
}


// strict mode
'use strict';
try {
    x=10;
} catch(err){
    console.log("strict mode error caught:",err.message);
} 