

const user={
    username:"hitesh",
    price:999,

    welcomeuser:function(){
    //console.log(`${this.username}, Welcome to website`)
  //  console.log(this);  print whole function
   }
}
//user.welcomeuser()
//user.username="sam"
//user.welcomeuser()
//console.log(this);  // print empty kyoki yeh node enviornment ke andr hai 

function chai()
{
    let username="jarati"
    console.log(this.username);
}
chai()
//output undefined

const chai2=function()
{
    let username="jajratu"
    console.log(this.username)
}
chai2()
//output undefined

const chai3=()=>
{
    let username="jagrdti"
    console.log(this)
}
chai3()
//basic arrow function 
const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(3,4))

//implicite arrow function
const add2=(num1,num2)=>(num1+num2)
console.log(add2(34,2))

//if you want to return any object in js in arrow function
const addtwoo=(num1,nu2)=>({username:"jaggu"})
console.log(addtwoo(3,4))
