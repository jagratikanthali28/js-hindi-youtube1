
//if(true)
{
let a=10;
const b=20
var c =30

}
//console.log(a);   error
//console.log(b);    error
//console.log(c);
function one(){
    const username="jaggu"
    function two()
    {
         const website="youtube"
         console.log(username);
    }
   // console.log(website);
    //two();
}
//one()

if(true)
{
    const username1="jagrati"
    if(username1==="jagrati")
    {
        const website="youtube";
        console.log(username1+website)
    }
    //console.log(website);
}
//console.log(username1)


//++++++++++++++++++++++interesting+++++++++++++++

console.log(fun(5))   //it will not give any error
function fun(value)
{
    return value+1;
}
//const ans=fun(5);
//console.log(ans);


console.log(addTwo(5));  //it will give yuo error can't access before intialization

const addTwo=function(num)
{
    return num+2;
}
//addTwo(5);
//console.log(addTwo);