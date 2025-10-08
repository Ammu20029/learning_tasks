// Basic variable and console
let x = 2;
let y = x * x;
console.log("y:", y); 

//Function hoisting
printAge(18);
function printAge(age) {
    console.log("Age:", age); 
}

//Variable hoisting
var num;
num = 12;
var num = 12;
console.log("a before declaration:", a); 
var a = 12;
console.log("a after assignment:", a); 

// Event Loop 
console.log("Start");
setTimeout(() => {
    console.log("setTimeout callback");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise resolved");
});
console.log("End");


// Call Stack 
function f1() {
    console.log("Hi by f1");
}
function f2() {
    f1();
    console.log("Hello by f2");
}
f2();

// Garbage Collector 
class Algo {
    constructor() {
        this.objects = [];
    }

    createObject(name) {
        const obj = { name: name, refCount: 1 };
        this.objects.push(obj);
        return obj;
    }

    mark() {
        this.objects.forEach(obj => {
            if (obj.refCount > 0) {
                obj.marked = true;
            }
        });
    }

    sweep() {
        this.objects = this.objects.filter(obj => obj.marked);
    }

    collectGarbage() {
        this.mark();
        this.sweep();
    }

    prints() {
        return this.objects;
    }
}

const gc = new Algo();
const obj1 = gc.createObject("Object1");
const obj2 = gc.createObject("Object2");
obj2.refCount = 0;
gc.collectGarbage();
console.log("Remaining objects after GC:", gc.prints());


// 'this' with getter or setter
const o = {
    a: 1,
    b: 2,
    c: 3,
};

Object.defineProperty(o, "sum", {
    get: function () {
        return this.a + this.b + this.c;
    },
    enumerable: true,
    configurable: true,
});

Object.defineProperty(o, "average", {
    get: function () {
        return (this.a + this.b + this.c) / 3;
    },
    enumerable: true,
    configurable: true,
});

console.log("average:", o.average, "sum:", o.sum); // average: 2 sum: 6

// 'this' with arrow function
const obj4 = {
    getThisGetter() {
        const getter = () => this;
        return getter;
    },
};

console.log("Arrow function this:", obj4.getThisGetter()() === obj4); // true

// 'this' with constructor
function Ca() {
    this.a = 37;
}
let c = new Ca();
console.log("c.a from Ca:", c.a);

function Ca2() {
    this.a = 37;
    return { a: 38 }; 
c = new Ca2();
console.log("c.a from Ca2:", c.a); 
}