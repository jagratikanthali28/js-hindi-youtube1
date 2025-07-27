function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
        getNextData();
        }
    },2000);
}               //this is known as callbackhell problem
    getData(1, ()=>{
        getData(2,()=>{
            getData(3,()=>{
                getData(4);
            });
        });
    });
