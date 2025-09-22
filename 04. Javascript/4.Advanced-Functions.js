let v=5; //global Scope
console.log(v);
function myFunction(){
    var i=4; //local  scope
    console.log(i);
}
console.log(i);
myFunction();
myfunction1();
function myfunction1(){
    var k=6; // block scope
    console.log(k);
}
console.log(k);
if (true){
    let v=5;
    var i=4;
    var k=6;
}
console.log("closure Example:")
function myfunction3(){
    count=0;
    return function() {
        count++;
        console.log(count);

   };
}
const counter=myfunction3();
counter();
counter();
console.log("Data encapsulation")
function hiddenpassword(){
    let password="AMMU";
    return {
        checkpassword:function (input){
            return input==password;
        }
    };
}
const passwordmanager=hiddenpassword();
console.log(passwordmanager.checkpassword("wrong"));
console.log(passwordmanager.checkpassword("AMMU"))
console.log("higher Order function")
const n= [2,4,8,9,-25];
const square=n.map((n)=>n*n);
console.log(square);
const even=n.filter((n)=> n%2==0);
console.log(even);
const sum=n.reduce((acc,curr)=>acc+curr,0);
console.log(sum);
n.forEach((n)=>console.log(n*2));
const odd=n.find((n)=>(n%2)!=0 );
console.log(odd);
const Negative=n.some((n)=>n<0);
console.log(Negative); // some elements in array are negative
const pos=n.every((n)=>n>0);
console.log(pos);// every element is positive
console.log("callback function:");
function myDisplayer(some) {
    console.log("Result is:", some);
}
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(6, 4, myDisplayer); 
console.log("IIFE example:");
var counters=(function(){
    var count=0;
    return {
        increment:function(){
            count++;
        },
        getCount:function() {
            return count;
        }
    };
})();
counters.increment();
counters.increment();
console.log(counters.getCount());
console.log(counters.count);// can not access private variable