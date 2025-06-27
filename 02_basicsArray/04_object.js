console.log("object class 2")

const tinderUser=new Object()  // singlton object
const tinderuser2={};  // non singlton object
console.log(tinderUser);
tinderuser2.id="123abc"
tinderuser2.name="samay"
tinderuser2.isLoggedIn=false;
console.log(tinderuser2);

const regularUser={
    email:"soe@gmail.com",
    fullname:{
        userFullName:{
            firstName:"jahrati",
            lastName:"kanthali"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstName);