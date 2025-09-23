const colors = ["white", "Black", "Blue", "Green", "Yellow", "Red"];
let push_colors = colors.push("Orange", "Violet");
console.log(push_colors);

let pop_colors = colors.pop();
console.log(pop_colors);

let shift_colors = colors.shift();
console.log(shift_colors);

let unshift_colors = colors.unshift("light Green", "dark green");
console.log(unshift_colors);

let splice_colors = colors.splice(2, 0, "baby pink", "Navy Blue");
console.log(splice_colors);

const slice_colors = colors.slice(1, 4);
console.log(slice_colors);

let sum = 0;
const nums = [65, 85, 61, 14, 6];
nums.forEach(myFunction);
function myFunction(item) {
    sum += item;
}
console.log(sum);

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction1);
function myFunction1(value) {
    return value * 2;
}
console.log(numbers2);

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction2);
function myFunction2(value) {
    return value > 18;
}
console.log(over18);

const numbers3 = [45, 4, 9, 16, 25];
let add = numbers3.reduce(myFunction3);
function myFunction3(total, value) {
    return total + value;
}
console.log(add);

const ages = [3, 10, 18, 20];

function checkAge(age) {
    return age > 18;
}

function myFunction4() {
    console.log(ages.find(checkAge));
}

myFunction4();


const number = [45, 4, 9, 16, 25];
let someOver18 = number.some(myFunction);
function myFunction(value) {
    return value > 18;
}
console.log(someOver18);

const numbe = [45, 4, 9, 16, 25];
let allOver18 = numbe.every(myFunction);
console.log(allOver18);

function abc(a, ...rest) {
    console.log(rest);
}
abc(10, 1, 2, 3, 4, 5);

console.log(...[1, 2, 3]);

const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
let [fruit1, fruit2] = fruits;
document.getElementById("demo").innerHTML = fruit1 + " " + fruit2;
