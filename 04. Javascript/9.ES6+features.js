import {alpha,bet,country,number} from './9.utils.js';
let a=5;
let b=10;
console.log(`the sum ${a} and ${b} is ${a+b}`);

function ab() {
    var n="hii";
    console.log(n);
}
ab();

if (true) {
    let num=10;
    console.log(num);
}


console.log(country);


console.log(number(2,3));

const colors=['yellow','orange', 'pink'];
const[first, second]=colors;
console.log(first);
console.log(second);

const obj ={name:"mai", age:16};
const {name,age}=obj;
console.log(name);
console.log(age);


console.log(alpha(78,56,3,9,7));


console.log(bet(...[3,5,7]));