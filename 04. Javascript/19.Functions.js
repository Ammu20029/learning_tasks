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

