const x = Number(prompt("Enter the value"));

if (x === 0) {
    console.log("zero");
} else if (x % 2 === 0) {
    console.log("even: " + x);
} else {
    console.log("odd: " + x);
}

console.log("Multiplication Table:");
for (let i = 1; i <= 10; i++) {
    console.log(`${x} * ${i} = ${x * i}`);
}

console.log("Triangle:");
for (let j = 1; j <= 5; j++) {
    console.log("*".repeat(j));
}

console.log("Inverse Triangle:");
for (let k = 5; k >= 1; k--) {
    console.log("*".repeat(k));
}

console.log("Triangle with Numbers:");
for (let l = 1; l <= 5; l++) {
    let row = "";
    for (let m = 1; m <= l; m++) {
        row += m + "";
    }
    console.log(row);
}

console.log("Repeating Triangle:");
for (let n = 1; n <= 5; n++) {
    console.log(String(n).repeat(n).split("").join(""));
}

console.log("Pyramid Triangle:");
for (let o = 1; o <= 5; o++) {
    let spaces = " ".repeat(5 - o);
    let numbers = "";
    for (let t = 1; t <= o; t++) {
        numbers += t;
    }
    console.log(spaces + numbers);
}

console.log("Continuous Number Triangle:");
let count = 1;
for (let p = 1; p <= 5; p++) {
    let row = "";
    for (let q = 1; q <= p; q++) {
        row += count + " ";
        count++;
    }
    console.log(row);
}

console.log("Descending Number Triangle:");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = i; j >= 1; j--) {
        row += j;
    }
    console.log(row);
}

let Day = "";
switch (new Date().getDay()) {
    case 0: Day = "Sunday"; break;
    case 1: Day = "Monday"; break;
    case 2: Day = "Tuesday"; break;
    case 3: Day = "Wednesday"; break;
    case 4: Day = "Thursday"; break;
    case 5: Day = "Friday"; break;
    case 6: Day = "Saturday"; break;
}
console.log("Today is:", Day);

let s = 0;
while (s < 3) {
    console.log("while loop: " + s);
    s++;
}

let u = 0;
let doText = "";
do {
    doText += "The number is " + u + "\n";
    u++;
} while (u < 10);
console.log(doText);


console.log("For loop with continue:");
let cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let q = 0; q < cars.length; q++) {
    if (cars[q] === "Volvo") continue;
    text += cars[q] + "\n";
}
console.log(text);


console.log("For-in loop:");
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let r in numbers) {
    txt += numbers[r] + " ";
}
console.log(txt);
