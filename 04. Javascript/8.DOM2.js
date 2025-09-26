function changeText(id) {
    id.innerHTML="Oops!";
}

const parent=document.querySelector("div");
const child=document.querySelector(".child");
parent.addEventListener("click",function() {
    console.log("clicked parent");
},true);
child.addEventListener("click",function() {
    console.log("clicked child");
});

const form=document.getElementById("myForm");
const nameInput=document.getElementById('name');
const emailinput=document.getElementById('email');
const messageInput=document.getElementById('message');

let msg=document.getElementById("message");
msg.addEventListener("keydown",(event)=> {
    console.log("keydown:"+event.key);

});
msg.addEventListener("keypress",(event)=> {
    console.log("keypress:"+event.key);

});
msg.addEventListener("keyup",(event)=> {
    console.log("keyup:"+event.key);

});

const box=document.getElementById('box');
box.addEventListener('click', function() {
        alert('Box clicked!');
});
    
box.addEventListener('mouseover', function() {
        box.style.backgroundColor = 'lightgreen';
});
box.addEventListener('mouseout', function() {
        box.style.backgroundColor = 'lightblue';
});
    

