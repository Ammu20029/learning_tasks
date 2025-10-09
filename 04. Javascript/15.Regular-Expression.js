let email = "prasannatalada748@gmail.com";
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let emailResult = email.match(emailPattern);
console.log(emailResult);

let phone = "8688512423";
let phonePattern = /^\d{10}$/;
let phoneResult = phone.match(phonePattern);
console.log(phoneResult);

let password = "Prasanna@06";
let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
let passwordResult = password.match(passwordPattern);
console.log(passwordResult);

let text = "Is THIS all there is?";
let patternIs = /is/g;
let resultIs = text.match(patternIs);
console.log(resultIs);

let patternThis = /this/i;
let resultThis = text.match(patternThis);
console.log(resultThis);

let patternExactIs = /^is$/gm;
let resultExactIs = text.match(patternExactIs);
console.log(resultExactIs);

let replacedText = text.replace("there", "their");
console.log(replacedText);

let indexOfIs = text.search(/is/);
console.log(indexOfIs);

const splitText = text.split("");
console.log(splitText);
