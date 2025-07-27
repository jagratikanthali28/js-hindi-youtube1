//resolve
let promise=new Promise((resolve,reject)=>{
    console.log("i am a promise");
    resolve("success");
});
console.log(promise);

//reject
let promise1=new Promise((resolve,reject)=>{
    console.log("i am a promise");
    reject("promsie rejected");
})
console.log(promise1);

//output:==
//i am a promise
//promise rejected (can create an error by us)