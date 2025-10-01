// synchronous JS
console.log("Hi");
console.log("Hii");
console.log("Welcome");

//asynchronous JS with setTimeout() method
console.log("Hi");
setTimeout(()=> {
    console.log("Welcome");
},2000);

// setInterval() method
function abc() {
    console.log("abc");
}
setInterval(abc, 1000);

function greet(name, callback) {
    console.log("hi,"+name);
    callback();
}
function sayBye() {
    console.log("Goodbye!");
}
greet("Sam",sayBye);
// callbacks in function handling operations
function calc(a, b, callback){
    return callback(a, b);
}
function add(x,y) {
    return x+y;
}
function multi(x, y) {
    return x*y;
}
console.log(calc(5,3, add));
console.log(calc(5,3, multi));

//Modularizing Code
function getUserData() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("1. Got user data");
            resolve("userData");
        }, 500);
    });
}

function parseData(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("2. Parsed data");
            resolve("parsedData");
        }, 500);
    });
}

function saveData(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("3. Saved data");
            resolve("savedData");
        }, 500);
    });
}

function sendEmail(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("4. Sent email");
            resolve("done");
        }, 500);
    });
}

getUserData()
  .then(parseData)
  .then(saveData)
  .then(sendEmail)
  .then(() => {
    console.log("All done!");
  });
