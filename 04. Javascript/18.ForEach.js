// Initial users array
const users = [
  { id: 1, name: "Alice", email: "alice@example.com", login: true },
  { id: 2, name: "John", email: "john@example.com", login: false },
  { id: 3, name: "Ravi", email: "ravi@example.com", login: true },
  { id: 4, name: "Marie", email: "marie@example.com", login: true },
];

// Welcome function
function Welcome(user) {
  if (user.login) {
    console.log(`User logged in: ${user.name} at ${user.email}`);
  } else {
    console.log(`${user.name} is not logged in`);
  }
}
users.forEach(Welcome);

// Loop with for...of
for (const user of users) {
  console.log(user);
}

// Arrow function to create new user
const createNew = (id, name, email, login) => ({ id, name, email, login });
const pers = createNew(5, "Jerse", "jerse@example.com", true);
console.log(pers);

// Object with a greet method
const obj1 = {
  greet(user) {
    if (user.login) {
      console.log(`Hello, ${user.name}! Welcome back`);
    } else {
      console.log(`Hello, ${user.name}. Please log in`);
    }
  }
};

// Method using 'this'
function getUserEmail() {
  return this.email;
}
const alice = { name: "Alice", email: "alice@example.com", getUserEmail };
const john = { name: "John", email: "john@example.com", getUserEmail };

console.log(alice.getUserEmail());
console.log(john.getUserEmail());

// call & apply
function updateStatus(status) {
  console.log(`${this.name}'s status updated to: ${status}`);
}
updateStatus.call(users[1], "Active");
updateStatus.apply(users[2], ["Inactive"]);

// Constructor function
function User(id, name, email, login) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.login = login;
  this.info = function () {
    console.log(`User ${this.name} (${this.email}), logged in: ${this.login}`);
  };
}
const newUser = new User(5, "Emma", "emma@example.com", true);
newUser.info();
users.push(newUser);

// Reduce - Get logged in names
const loggedInNames = users.reduce((names, user) => {
  if (user.login) names.push(user.name);
  return names;
}, []);
console.log("Logged in users:", loggedInNames.join(", "));

// Additional users to combine
const additionalUsers = [
  { id: 3, name: "Renu", email: "renu@example.com", login: false },
  { id: 4, name: "Ren", email: "ren@example.com", login: false }
];
const combinedUsers = users.concat(additionalUsers);
console.log("Combined users:", JSON.stringify(combinedUsers, null, 2));

// Object.create with prototype
const baseMethods = {
  greet() {
    console.log(`Hi ${this.name}, welcome to our system!`);
  }
};
const extendedUser = Object.create(baseMethods);
extendedUser.name = "Alex";
extendedUser.greet();

// More users to merge with allUsers
const moreUsers = [
  { id: 4, name: "Ravi", email: "ravi@example.com", login: true },
  { id: 5, name: "Marie", email: "marie@example.com", login: false }
];
const allUsers = users.concat(moreUsers);

// Object.entries()
console.log("User John's properties:");
for (const [key, value] of Object.entries(john)) {
  console.log(`${key}: ${value}`);
}

// Object.freeze()
Object.freeze(john);
john.name = "Changed"; // Won’t change
console.log("After freeze:", john.name);

// Object.getOwnPropertyNames
console.log("Property names of John:", Object.getOwnPropertyNames(john));

// hasOwnProperty
console.log("John has 'email'?", john.hasOwnProperty("email"));

// Object.is
console.log("Is John same as new Emma?", Object.is(john, new User(3, "Emma", "emma@example.com", true)));

// Object.isExtensible
console.log("Is John extensible?", Object.isExtensible(john));

// Object.keys
console.log("All enumerable keys in John:", Object.keys(john));

// preventExtensions
Object.preventExtensions(john);
console.log("Extensions prevented:", Object.isExtensible(john));

// Object.setPrototypeOf before sealing
const tempUser = { name: "Temp", active: true };
const greetings = {
  sayHi() {
    console.log("Hi from prototype!");
  }
};
Object.setPrototypeOf(tempUser, greetings);
Object.seal(tempUser);
tempUser.active = false;
tempUser.sayHi();

// Object.values
console.log("Values of tempUser:", Object.values(tempUser));

// __defineGetter__ & __defineSetter__
const u = {};
u.__defineGetter__("status", function () {
  return "online";
});
u.__defineSetter__("status", function (val) {
  console.log("Status change attempt:", val);
});
console.log(u.status);
u.status = "offline";

// __lookupGetter__
console.log("Getter for status exists?", typeof u.__lookupGetter__("status") === "function");

// isPrototypeOf
console.log("baseMethods is prototype of extendedUser:", baseMethods.isPrototypeOf(extendedUser));

// toLocaleString
const price = 123456.78;
console.log("Price formatted:", price.toLocaleString("en-IN", {
  style: "currency",
  currency: "INR"
}));

// toString (via JSON)
console.log("Users array as string:", JSON.stringify(users));

// valueOf override
function MyNumber(n) {
  this.number = n;
}
MyNumber.prototype.valueOf = function () {
  return this.number;
};
const myNum = new MyNumber(10);
console.log("10 + MyNumber(10) =", 10 + myNum);

// Group by login
const groupedByLogin = allUsers.reduce((acc, user) => {
  const key = user.login ? "loggedIn" : "loggedOut";
  if (!acc[key]) acc[key] = [];
  acc[key].push(user);
  return acc;
}, {});
console.log("Grouped users by login:", groupedByLogin);

// promises
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User: John"), 500);
  });
}

function getMenu() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Menu: Pizza, Burger"), 700);
  });
}

function placeOrder(user, item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3; // generates random number greater than 0.3
      success// returns true if number greater than 0.3 else false
        ? resolve(`${user} successfully ordered ${item}!`)
        : reject(`${user}'s order for ${item} failed.`);
    }, 600);
  });
}

// 1. Basic Promise chaining
let currentUser = "";
let currentItem = "Pizza";

getUser()
  .then((user) => {
    console.log(user);
    currentUser = user;
    return getMenu(); //fetching menu
  })
  .then((menu) => {
    console.log(menu); //gets the menu
    return placeOrder(currentUser, currentItem);
  })
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .finally(() => console.log("Order taken\n"));

// 2. Promise.all
Promise.all([getUser(), getMenu()])
  .then(([user, menu]) => {
    console.log("[all] Got both:", user, "|", menu); //after finishing the  getUser and getMenu , gets the order details of john
  });

// 3. Promise.allSettled
Promise.allSettled([getUser(), placeOrder("User: John", "Burger")])
  .then((results) => {
    results.forEach((res) =>
      console.log(`[allSettled] ${res.status}:`, res.value || res.reason)
    );
  });

// 4. Promise.any
Promise.any([
  Promise.reject("Fail 1"),
  new Promise((res) => setTimeout(res, 500, "First success")),
  new Promise((res) => setTimeout(res, 1000, "Second success")),
]).then((value) => console.log("[any]:", value));

// 5. Promise.race
Promise.race([
  new Promise((res) => setTimeout(res, 300, "Fastest response")),
  new Promise((res) => setTimeout(res, 600, "Slow response")),
]).then((value) => console.log("[race]:", value));

// ES6 Classes with static desserts
class IceCream {
  constructor(flavor) {
    this.flavor = flavor;
  }

  describe() {
    return `This is a scoop of ${this.flavor} ice cream.`;
  }
}

class Cone extends IceCream {
  constructor(flavor, coneType = 'waffle') {
    super(flavor); // calling parent constructor
    this.coneType = coneType;
  }

  describe() {
    const baseDescription = super.describe();
    return `${baseDescription} Served in a ${this.coneType} cone.`;
  }

  static desserts = ['Vanilla Cone', 'Chocolate Cone'];

  static listDesserts() {
    return `Available Cone Desserts: ${this.desserts.join(', ')}`;
  }

  static addDessert(dessert) {
    if (!this.desserts.includes(dessert)) {
      this.desserts.push(dessert);
    }
  }
}

class Cup extends IceCream {
  constructor(flavor, topping = 'sprinkles') {
    super(flavor);
    this.topping = topping;
  }

  describe() {
    return `${super.describe()} Topped with ${this.topping}.`;
  }

  static desserts = ['Strawberry Cup', 'Mango Cup'];

  static listDesserts() {
    return `Available Cup Desserts: ${this.desserts.join(', ')}`;
  }

  static addDessert(dessert) {
    if (!this.desserts.includes(dessert)) {
      this.desserts.push(dessert);
    }
  }
}

// Using static methods
console.log(Cone.listDesserts());
Cone.addDessert("Butterscotch Cone");
console.log(Cone.listDesserts());

console.log(Cup.listDesserts());
Cup.addDessert("Blueberry Cup");
console.log(Cup.listDesserts());

// Using class instances
const cone1 = new Cone("Butterscotch");
console.log(cone1.describe());

const cup1 = new Cup("Mango", "chocolate chips");
console.log(cup1.describe());


// GENERATOR STARTER 

function* userLoginMessages() {
  yield "Checking login...";
  yield "Fetching user...";
  yield "Login success!";
}

const msgGen = userLoginMessages();
console.log(msgGen.next().value);
console.log(msgGen.next().value);
console.log(msgGen.next().value);

function* userIterator(usersList) {
  for (const user of usersList) {
    yield user;
  }
}

console.log("Iterating users using generator:");
const userGen = userIterator(users);
for (const user of userGen) {
  console.log(`User: ${user.name}, Logged In: ${user.login}`);
}


// Iterator 
function makeRangeIterator(startDay, endDay, step) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let index = days.indexOf(startDay);
  const endIndex = days.indexOf(endDay);

  return {
    next: function () {
      if (index <= endIndex) {
        const value = days[index];
        index += step;
        return { value: value, done: false };
      }
      return { value: days.slice(days.indexOf(startDay), endIndex + 1), done: true };
    }
  };
}

// iterators
const openShop = makeRangeIterator("Monday", "Friday", 1);
let result = openShop.next();
while (!result.done) {
  console.log(result.value);
  result = openShop.next();
}
console.log("The opening days of shop are:", result.value);
// Create a unique Symbol
const uniqueId = Symbol("id");

// Create an object
const user = {
  name: "Alice",
  age: 30,
  [uniqueId]: 12345  // Use symbol as a hidden key
};


console.log(user.name);       // Alice
console.log(user[uniqueId]);  // 12345

// Symbols are not shown in normal loops
for (let key in user) {
  console.log(key);  // only logs "name" and "age", no symbol keys!
}

// But you can get symbol keys like this:
const symbols = Object.getOwnPropertySymbols(user);
console.log(symbols);         // [ Symbol(id) ]
// Use the symbol key to get the value
console.log(user[symbols[0]]);  // 12345
// Using Symbol.for() to share symbols globally
const globalSym1 = Symbol.for("sharedKey");
const globalSym2 = Symbol.for("sharedKey");
console.log(globalSym1 === globalSym2);  // true
// desturcturing
const guests = [
  {
    name: "John Doe",
    age: 28,
    rsvp: true, // attended the party
    contact: { phone: "123-4567", email: "john@example.com" },
    preferences: { drink: "coffee", snack: "nuts" },
  },
  {
    name: "Jane Smith",
    age: 22,
    // rsvp missing — use default false
    contact: { phone: "987-6543", email: "jane@example.com" },
    preferences: { drink: "tea" }, // no snack preference given
  },
  {
    name: "Mike Johnson",
    age: 35,
    rsvp: false,
    contact: { phone: null, email: "mike@example.com" },
    preferences: {},
  },
];

// Destructure first two guests to welcome them and get key info
const [
  {
    name: firstGuestName,// extract name
    rsvp: firstGuestRsvp = false, // default false if missing
    contact: { email: firstGuestEmail },
    preferences: { drink: firstGuestDrink = "water" },
  },
  {
    name: secondGuestName,
    rsvp: secondGuestRsvp = false,
    preferences: { snack: secondGuestSnack = "chips" },
  },
] = guests;

console.log(`${firstGuestName} RSVP: ${firstGuestRsvp}`); // John Doe RSVP: true
console.log(`${secondGuestName} RSVP: ${secondGuestRsvp}`); // Jane Smith RSVP: false (default)
console.log(`${firstGuestName} prefers to drink ${firstGuestDrink}`); // John Doe prefers to drink coffee
console.log(`${secondGuestName} prefers snack ${secondGuestSnack}`); // Jane Smith prefers snack chips (default)

// Swapping the first two guests in the queue
let guest1 = firstGuestName;
let guest2 = secondGuestName;
[guest1, guest2] = [guest2, guest1]; //swapped guest1 and guest2
console.log(`Now first in queue: ${guest1}`); // Now first in queue: Jane Smith
console.log(`Now second in queue: ${guest2}`); // Now second in queue: John Doe
// object destructuring
function welcomeGuest({
  name,
  rsvp = false,
  contact: { email } = {},
  preferences: { drink = "water", snack = "chips" } = {},
} = {}) {
  if (rsvp) {
    console.log(`Welcome, ${name}! We've got your RSVP.`);
  } else {
    console.log(`Hello, ${name}. Please RSVP next time.`);
  }
  console.log(`Contact email: ${email}`);
  console.log(`Your favorite drink: ${drink}`);
  console.log(`Your favorite snack: ${snack}`);
  console.log("------");
} 
guests.forEach(welcomeGuest);
