const element=document.getElementById("abc");
element.style.color="green";
element.style.textAlign="center";
element.style.margin="30px";
element.style.fontsize="30px";

const elements=document.getElementsByClassName('selector');
elements[0].style.color="green";
elements[1].style.color='red';
elements[0].style.textAlign='center';
elements[1].style.textAlign='center';
elements[0].style.marginTop="60px";

const element1=document.querySelector('.efg');
element1.style.color="green";
element1.style.textAlign="center";
element1.style.margin="30px";

const elements2=document.querySelectorAll('.selector');
elements2[0].style.color="yellow";
elements2[0].style.textAlign="center";
elements2[0].style.marginTop="60px";

document.getElementById("p1").innerHTML="Welcome";
element.style.backgroundColor="#dbe4e4ff";

const para=document.createElement("p");
const node=document.createTextNode("This is new");
para.appendChild(node);
const element3=document.getElementById("div1");
element.appendChild(para);

const elmnt=document.getElementById("p3");elmnt.remove();

document.getElementById("p2").style.color="blue";
document.getElementById("p2").style.fontFamily="Arial";
document.getElementById("p2").style.fontSize="larger";