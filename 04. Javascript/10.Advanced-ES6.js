class employee {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
     showDetails() {
        console.log (`This employee name was ${this.name}
            ${this.age}.`);
    }
}

// creating objects from the class
const employee1=new employee("jai","24");
const employee2=new employee("Ravi","21");

//using the objects
employee1.showDetails();
employee2.showDetails();

class Location extends employee {
    constructor(city,gender) {
        super(city,gender);
        this.city=city;
        this.gender=gender;
    }
}
const o=new Location('vizag','male')
console.log(o.showDetails())

class Car {
    constructor(name) {
        this.name=name;
    }
    static hello(x){
        return "Hello"+x.name;
    }
}
const myCar=new Car("ford");
document.getElementById("demo").innerHTML=Car.hello(myCar);

class SquareArea {
    constructor(side){
        this.side=side;
    }
    get a() {
        return this.side*this.side;
    }
    set a(value){
        if(value<0) {
            console.log("value can't be negative")
        }
    }
}
const square=new SquareArea(5);
console.log(square.a);
square.a=60;

const sym1=Symbol('id');
const sym2=Symbol('id');
const obj={
    [sym1]:"25552525",
    [sym2]:"245321552"
};

console.log(obj[sym1]);
console.log(obj[sym2]);

const arr=[20, 80, 90];
const iterable=arr[Symbol.iterator]();
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());

function* generate() {
    yield 'Hii';
    yield 'Hlo';
    yield 'Welcome';
}
const generator=generate();