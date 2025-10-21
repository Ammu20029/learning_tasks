function getThis() {
    this.name="hack";
    return this;
}
const obj1={name:"john", age:56};
const obj2={name:"mike",age:41};
obj1.getThis=getThis;
obj2.getThis=getThis;
console.log(obj1.getThis());
console.log(obj2.getThis())
// constructor
function getThis1(){
    this.name="hack";
    return {
        name:"marie"
    };
}
let o=new getThis1();
console.log(o.name);
getThis.call(o,"harry",14);
getThis.apply(o,["skew",5]);
//this in object conversion
function bar(){
    console.log(Object.prototype.toString.call(this));
}
bar.call(45);
bar.call("hello");
//bind
const g=getThis.bind({name:"annaballe"});
console.log(g());
//promise.all()- 
const promise1=Promise.resolve(3);
const promise2=52;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,"hello");
});
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
});
//promise.allsettled-
const p3=[promise1,promise2];
Promise.allSettled(p3).then((results)=>
results.forEach((result)=>
console.log(result.status)),);
//promise.any()-
const p1=Promise.reject(new Error("error"));
const p2=new Promise((resolve)=>
setTimeout(resolve,100,"quick"));
const p4=new Promise((resolve)=>
setTimeout(resolve,100,"slow"));
const promisess=[p1,p2,p4];
Promise.any(promisess).then((value)=>
console.log(value));

//promise.race()- 
const promise5=new Promise((resolve, reject)=>
{
    setTimeout(resolve, 500, "one");
});
const promise6=new Promise((resolve,reject)=>
{
    setTimeout(resolve,100,"two");
});
Promise.race([promise5,promise6]).then((value)=>{
    console.log(value);
});


//Array.reduce()
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];

const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

const employees=[
    {name:"Alice",department:"sales"},
    {name:"john",department:"HR"},
    {name:"Dave",department:"Customerservies"},
    {name:"Charlie",department:"HR"},
    {name:"Marie",department:"Customerservies"},
    {name:"Eve",department:"sales"}
];
const Dept=employees.reduce((acc,employee)=>{
    const dept=employee.department;
    if(!acc[dept]){ // intializes array if not exists
        acc[dept]=[];
    }
    acc[dept].push(employee.name);
    return acc;
},
{});
console.log(Dept);
function loginUser(uname,password){
    return new Promise((resolve,reject)=>{
        console.log("logging in");
        setTimeout(()=>{
            if(uname==="admin" && password==="4321"){ //if corrects, calls resolve
                resolve({userId:1,name:"Admin"});
        
            }else {
                reject("Invalid details"); //calls reject()
            }
        },5000);
    });
}

let person={
    firstName:"John",
    lastName:"Doe",

    get fullName() {
        return this.firstName+""+this.lastName;
    },

    set fullName(name){
        const parts=name.split(" ");
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};
console.log(person.fullName);
person.fullName="Alice Smith";
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

function UserTasks(userId){ //promise to get the user tasks
    return new Promise((resolve,reject)=>{
        console.log("Getting the tasks");
        setTimeout(()=>{
            if(userId===1){ // returns the following tasks if userid is 1
                resolve([
                    {title:"fix the bug"},
                    {title:"update the client"},
                ]);
            }else{
                reject("No tasks were found");
            }
    },1000);
});
}
loginUser("admin","4321")
.then(user=>{
    console.log(`Welcome, ${user.name}`);
    return UserTasks(user.userId);
})
.then(tasks=>{
    console.log("Your tasks:");
    tasks.forEach(tasks=>{
        console.log(`${tasks.title}`);
    });
})
.catch(error=>{
    console.error();
});