console.log("hii");
//primitive data type
//7 types
 //1 String , Number,Boolean, null,undefined,Bigint,Symbol

 //2 non primitive
 //reference(Non primitive)
 //Array, Objects, Functions

 const score=100;
 const scoreValue=100.3;
 const isLoogedIn=false;
 const outside=null;
 let userEmail;

 const id=Symbol('123')
 const anotherId=Symbol('123');
 console.log(id===anotherId);

 const bigInter=13565432;
 console.log(bigInter);   //bigInteger


 //non primitive data tyeps
 //Reference (Non priitive)
 //Array , object , Functions

 const heros=["shaktiman","naagraj","doga"]   //array
 let myObj={
  name:"jaggu",
  age:22,
 }

 const myFunction=function(){
    console.log("hello with new function");
 }
 console.log(heros);
 console.log(myObj);
 console.log(myFunction);




 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //Stack(Primitive) , Heap(Non-Primitive)

 let myname="jagrati";
 let copyname=myname
 console.log(myname)
 console.log(copyname);
 copyname="gauri";
  console.log(myname)
 console.log(copyname);

 let user1={
    email:"user@google",
    upi:"user@ybl"
 }
 let userTwo=user1;
 userTwo.email="jaggu@gmail.com";
 user1.email="yes";
 console.log(user1);
 console.log(userTwo);