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

function myFun(){
    
}