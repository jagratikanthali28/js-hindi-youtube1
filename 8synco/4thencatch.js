//Promises == .then() & .catch()

//after resolve we will use this to do something else work
//promise.then((res)=>{.....})

//after reject if we want to do any work then we will use
//promise.catch((err)=>{....})

const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise");
        resolve("success");
       //reject("rejectedfdff");
    });
};

let promise=getPromise();
//console.log(promise);
promise.then(()=>{
  console.log("promise fullfill");
})

promise.catch(()=>{
    console.log("rejected");
});
