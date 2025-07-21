console.log("funaction")
//creation of a function
function yfun()
{
    console.log("welcome to our first function");
}
yfun()
yfun()
yfun()
yfun()

function sum(a,b) 
{
   console.log(a+b);
   console.log("before return")
   return 0;
   //console.log("after return")  never gonna to run 
}
sum(12,12);

//arrowSum
const arrowSum=(a,b)=>{
    console.log(a+b);
}
arrowSum(20,4);

const arrowMul=(a,b)=>{
    return a*b
}
let ans=arrowMul(200,3)
console.log(ans);

//task 
function f1(a)
{
    let count=0;
    for(let i=0;i<a.length;i++)
    {
        if(a[i]=='a' || a[i]=='e' || a[i]=='i' || a[i]=='o' || 
            a[i]=='u' || a[i]=='A' || a[i]=='E' || a[i]=='I'
             || a[i]=='O' || a[i]=='U')
             {
                count++;
             }
    }
    console.log(`count of vowel is : ${count}`);
}
f1("jagrati")

let an=(a)=>{
   let count=0;
    for(let i=0;i<a.length;i++)
    {
        if(a[i]=='a' || a[i]=='e' || a[i]=='i' || a[i]=='o' || 
            a[i]=='u' || a[i]=='A' || a[i]=='E' || a[i]=='I'
             || a[i]=='O' || a[i]=='U')
             {
                count++;
             }
    }
    console.log(`coutn of vowel using arrow function is: ${count}`);
}
an("jagguaaaaa");


//callback function
function myfun(){
    console.log("hello");
}
function  fun(myfun){
   return myfun;
}

let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val);
});

let arr2=["delhi","pune","mumbai","bhopal"];
arr2.forEach((val)=>{
    console.log(val.toUpperCase());
});

let ar=[1,2,3,4,5,6];
ar.forEach((val)=>
{
   let ans=val*val
   console.log(ans);
});

//map in javascript similar to for each loop but the 
//main difference is it returns new array and doesnot want 
//to make any changes in old array then we need to use Map 

let a1=[13,14,14,15];
let ne=a1.map((val)=>
{
   return val;
});
console.log(ne);
//


//we want to filter out the value which are not even then better to use filter funcyion then if else or any conditional statement
let a11=[10,12,2,3,13,3]
let n11=a11.filter((val)=>
{
    return val%2!=0
})

console.log(n11);

//reduce function 
let a12=[1,2,3,4,5,5,6];
const output=a12.reduce((res,curr)=>{
   return  res+curr;
});
console.log(output);

let a13=[10,20,3,4,5,5,6];
const output1=a13.reduce((res,curr)=>{
   return  res<curr?res:curr;
});
console.log(output1);

let j1=[100,200,300,40]
let j11=j1.filter((val)=>
{

   return val>90;
});
console.log(j11);

let acn=[110,20,30,40,50,60];
let app=acn.reduce((res,curr)=>
{
   return res+curr;
});

console.log(app);
