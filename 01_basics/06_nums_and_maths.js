console.log("number and maths");
const score=400;
console.log(score);
console.log(typeof score)          //number
const balance=new Number(100);   //specially ak object defined kiya hai jo ki number type ka hai bs itna hi difference hai 
console.log(balance);
console.log(typeof balance)    //object

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // after . decimal how many number we want to print

const otherNUmber=123.8966
console.log(otherNUmber.toPrecision(3))

const val=1000000;
console.log(val.toLocaleString());  //1,000,000
console.log(val.toLocaleString('en-IN'));  //10,00,000

//+++++++++++++++++++++Maths++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4))   //4
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.random());  //iski value hmesha 0-1 ke bich aaegi 


