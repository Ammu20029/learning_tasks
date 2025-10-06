//resolve
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([89, 45, 323]);
    }, 5000);
});
promise.then(values => {
    console.log(values[1]);
});
 //reject
let promise1 = Promise.reject("I am a reason of error");
promise1.catch(function (error) {
    console.log(error);
});
//then
let prom1 = new Promise((resolve, reject)=>{
    reject("Rejected");
})
.then(e=>{console.log("Hello Successful")}, e=>{console.log(e)})
//catch
let prom2=new Promise((resolve,reject)=>{
    reject("Failure");
})
.then(e=> {console.log("Hello Successful")})
.catch((e)=>{console.log(e)})
//Chaining Promises
function task(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}
// Chaining promises
task('Task 1 completed', 1000)
    .then(() => task('Task 2 completed', 2000))
    .then(() => task('Task 3 completed', 1000));

// Async await
async function myfunction() {
    return "Hello";
}
const getData=async()=>{
    let data='Hello World';
    return data;
}
getData().then(data=>console.log(data));
const getData1=async()=>{
    let y=await "Hello World";
    console.log(y);
}
console.log(1);
getData();
console.log(2);

//try and catch
try{
    const a=5/0;
    console.log('result is:',a);
} catch(e) {
    console.error('Error occurred',e.message);
} 

//Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=> response.json())
.then(json=> {
    let li=`<tr><th>Name</th><th>Email</th></tr>`;
    json.forEach(user=> {
        li+=`<tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        </tr>`;
    });
    document.getElementById("users").innerHTML=li;
});

fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body:JSON.stringify({
        title:"foo",
        body:"bar",
        userId:1
    }),
    headers:{
        "Content-type":"application/json;charset=UTF-8"
    }
})
.then(response=>response.json())
.then(json=>console.log(json));