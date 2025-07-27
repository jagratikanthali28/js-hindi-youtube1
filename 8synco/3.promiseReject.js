function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("error");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}

let proise=getData(123);
console.log(proise);