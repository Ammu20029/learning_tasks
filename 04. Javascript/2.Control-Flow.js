const x=Number(prompt("enter the value"));
if (x%2==0)
    console.log("even:" +x);
 else
    console.log("odd:" +x);
console.log("multiplication table")
 for (let i=1;i<=10;i++)
    console.log(x+"*"+i+"="+(x*i));
console.log("triangle")
for (let j=1;j<=5;j++)
    console.log("*".repeat(j));
console.log("inverse triangle")
for (let k=5;k>=1;k--)
    console.log("*".repeat(k));
console.log("triangle with numbers")
for (let l=1;l<=5;l++){
    let row="";
    for (let m=1;m<=l;m++){
        row+=m+"";
    }
    console.log(row);
}
console.log("repeating row numbers in a triangle")
for (let n=5;n>=1;n--)
    console.log(String(n).repeat(n).split('').join(''))
console.log("Pyramid triangle")
for (let o=1;o<=5;o++){
    let spaces="".repeat(5-i);
    let numbers="";
    for (let j=1;j<=i;j++){
        numbers+=j+"";
    }
    console.log(spaces+numbers);
}
console.log("Continous Number Triangle");
let count=1;
for (let p=1;p<=5;p++){
    let row="";
    for (let q=1;q<=i;q++){
        row+=count+"";
        count++;
    }
    console.log(row)
}
console.log("Descendig Number Triangle");
for (let i=1;i<=5;i++){
    let row="";
    for (let j=i;j>=1;j--){
        row+=j+"";
    }
    console.log(row);
}