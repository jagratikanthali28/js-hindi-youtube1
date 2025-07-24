class ToyotaCar{
    constructor(){
        console.log("creating new object");
    }
    start(){
        console.log("start by us");
    }

    stop(){
        console.log("stop by you");
    }

    setBrand(brand)
    {
        this.brandName=brand;
        console.log(this.brandName);
    }
}
let fortuner=new ToyotaCar();
console.log(fortuner);
console.log(fortuner.start());
console.log(fortuner.stop());

let lexus=new ToyotaCar();


console.log(fortuner.setBrand("jsggu"));