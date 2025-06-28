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

console.log(tinderuser2);
console.log(Object.keys(tinderuser2));
console.log(Object.values(tinderuser2));
console.log(Object.entries(tinderuser2));   //print all values
console.log(tinderuser2.hasOwnProperty('isLoggedIn'));  //check key exist or not



//+++++++++++++++destructure of object++++++++++++++++++++
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"jagrati"
}

//course.courseInstructor
const{courseInstructor}=course
console.log(courseInstructor)


//destructur
const {courseInstructor: instructor}=course
console.log(courseInstructor)
console.log(instructor);

const navbar=({company})=>{

}
navbar(company="jagrati")

{   //it is correct but giving error fine
  //  "name":"jagrati",
  //  "courseName":"js in hindi",
   // "price":"free"

}

[
    {},
    {},
    {}
]