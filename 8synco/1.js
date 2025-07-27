//callbacks function = when a function pass as an argument for 
//another function 

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCal){
    sumCal(a,b);
}
calculator(1,2,sum);

//output will be 3 only 

//setTimeout function 
const hello=()=>{
    console.log("hello");
};
setTimeout(hello,3000);