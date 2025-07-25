class Toy{
    constructor(brand,milenge){
        this.brand=brand;
        this.milenge=milenge;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let fortuner=new Toy("fortuner",101);
console.log(fortuner);
let lexus=new Toy("lexus",12);
console.log(lexus);