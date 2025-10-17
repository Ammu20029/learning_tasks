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
//promise
const promise1=Promise.resolve(3);
const promise2=52;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,"hello");
});
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
});
const p3=[promise1,promise2];
Promise.allSettled(promises).then((results)=>
results.forEach((result)=>
console.log(result.status)),);
function loginUser(uname,password){
    return new Promise((resolve,reject)=>{
        console.log("logging in");
        setTimeout(()=>{
            if(uname==="admin" && password==="4321"){
                resolve({userId:1,name:"Admin"});
        
            }else {
                reject("Invalid details");
            }
        },5000);
    });
}

function UserTasks(userId){
    return new Promise((resolve,reject)=>{
        console.log("Getting the tasks");
        setTimeout(()=>{
            if(userId===1){
                resolve([
                    {title:"fix the bug"},,
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
    consople.log("Your tasks:");
    tasks.ForEach(tasks=>{
        console.log(`.${tasks.title}`);
    });
})
.catch(error=>{
    console.error();
});