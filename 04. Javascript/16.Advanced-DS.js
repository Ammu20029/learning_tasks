//Set 
const set1 = new Set([1, 2, 3]);
console.log("Initial Set values:", [...set1]); // using spread to show values

set1.add(4);
console.log("After adding 4:", [...set1]);

// WeakSet 
const weakSet = new WeakSet();
let obj = {
  message: 'Hi',
  sendMessage: true
};
weakSet.add(obj);
console.log("WeakSet has obj:", weakSet.has(obj)); // true

//  Map 
const map = new Map();
map.set("name", "John");
map.set("age", 45);
console.log("Map entries:", [...map.entries()]);

//  WeakMap
const weakMap = new WeakMap();
let alice = { name: "Alice" };
weakMap.set(alice, "Some secret data");

alice = null; 
console.log("WeakMap get alice (should be undefined):", weakMap.get(alice));
console.log("WeakMap has alice (should be false):", weakMap.has(alice));

// JSON Parse & Stringify
const jsonStr = `{
  "name": "ABC",
  "age": 16,
  "country": "India"
}`;
const parsedObj = JSON.parse(jsonStr);
console.log("Parsed name:", parsedObj.name);
console.log("Parsed age:", parsedObj.age);

const stringified = JSON.stringify(parsedObj); // Correct: stringify the object, not the original string
console.log("Stringified object:", stringified);

//  Local Storage 
localStorage.setItem("color", "Pink");
console.log("Local Storage color:", localStorage.getItem("color"));

// Session Storage 
sessionStorage.setItem("carColor", "Pink");
sessionStorage.setItem("pcColor", "Yellow");
sessionStorage.setItem("laptopColor", "White");

console.log( sessionStorage.key(1)); // Gets the key name at index 1
console.log(sessionStorage.getItem("pcColor"));

// Cookies 
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
}
