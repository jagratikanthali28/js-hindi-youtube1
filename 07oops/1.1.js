const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },

    calTax2:function(){
        console.log("tax rate is 10%");
    }
};

const karanArjun={
    salary:5000,
    calcTax(){
        console.log("tax raet is 20%");
    },
};
console.log(employee);
console.log(karanArjun)

karanArjun.__proto__=employee;   //it is a kind of reference

console.log(employee.calcTax());
console.log(karanArjun.calcTax());
