
//Arithmetic Operator
let a=10;
let b=3;
console.log("a + b = ", a+b)

console.log("a * b = ", a*b);
console.log("a * b = ", a**b);

//Unary operator
a++;
console.log(a);
console.log(a%=2);

//conditional statement if else else if
let age=16;
if(age<=18)
{
    console.log("you caonnot vote");
}
else if(age>18)
{
    console.log("you can vote");
}
else{
    console.log("you never voted");
}

let num=20;
if(num%2==0)
{
    console.log(num, "is even ");
}

else{
    console.log("number is odd");
}

//task 2 
let nu=59;
if(nu>=80 && nu<=100)
{
    console.log("A");
}
else if(nu>=70 && nu<=89)
{
    console.log("B");
}
else if(nu>=60 && nu<=69)
{
    console.log("c");
}
else if(nu>=50 && nu<=59)
{
    console.log("D");
}
else{
    console.log("F");
}
