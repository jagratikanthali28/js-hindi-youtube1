const accountId = 144556
let accountEmail = "jagrati.kanthali686@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

let accountState;
let price=100;
console.log(price);
console.log(typeof price)
//accountId = 2    not allowed const only declare once in a program
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

let x=BigInt("123");
console.log(x);
console.log(typeof x);

//object creation 
const obj1={
    name1:"jagrati",
    age:20,
    cgpa:7.8,
};
console.log(obj1.name1);
console.log(obj1["name1"]);

obj1["age"]=obj1["age"]+1;
console.log(obj1["age"]);