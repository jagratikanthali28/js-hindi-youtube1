class ToyotaCar{
    constructor(){
        console.log("hello constructor");
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand=brand;
        console.log(brand);
    }
}

let fortuner=new ToyotaCar();
console.log(fortuner);
let lexus=new ToyotaCar();
console.log(fortuner.setBrand("jaggu"))
console.log(lexus);
