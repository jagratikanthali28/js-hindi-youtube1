//objects
//singleton
//object literals
// object.create  by the use of this we can create any object in js

//object in js
const mySym=Symbol("key1");
const JsUser={
    name:"jagrati",
    "fullname":"jagratikanthali i am",
    age:22,
    mySym:"mykeygg",
    city:'indore',
    email:"ajgau@gmail.com",
    isLoggwcin:false,
    lastLoggin:["jagr","main"],
}
console.log(JsUser);
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.fullname);
console.log(JsUser["fullname"]);
console.log(JsUser.mySym);

//symbol in js
const mysym=Symbol("key1");
console.log(typeof mySym);
//Object.freeze(JsUser);
JsUser.email="gelloo@fsdsdi";
console.log(JsUser);
JsUser.greeting=function()
{
    console.log("hello JS user");
}
console.log(JsUser.greeting());

JsUser.greeting2=function(){
  console.log(`hello hs  user, ${this.name}`);
}
console.log(JsUser.greeting2());
