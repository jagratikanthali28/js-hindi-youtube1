// function reduction the repreatation and code redundancy in the code
console.log("J");
console.log("A")  //lecture aata hai pura done
console.log("G")
console.log("R")
console.log("A")
console.log("T")
console.log("I")
function sayMyName(){
    console.log("M")
    console.log("E")
    console.log("E")
    console.log("N")
    console.log("U")
}
//sayMyName()

function addTwo(num1,num2){
    return num1+num2;
}
const ans=addTwo(5,6);
console.log(ans);
console.log(addTwo(9,11))

function loginUser(username)
{
    return `${username} just logged in`
}
console.log(loginUser("jaggu"));

function newUser(username){
    if(username===undefined)
    {
        console.log("please enter username");
        return;
    }
    return `${username} just logged in`
}
console.log(newUser());

function carPrice(num1)
{
    return num1;
}
console.log(carPrice(2));


//rest operator
function carPriceNew(...num1)
{
    return num1
}
console.log(carPriceNew(100,200,3000));

//objects in function
const user={
    name:"jagrati",
    prices:20
}

function handObj(anyobj)
{
    console.log(`${anyobj.name} is the name and ${anyobj.prices} is the price of any array`)
}
console.log(handObj(user))

const myArray=[200,400,600];
function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(myArray));


