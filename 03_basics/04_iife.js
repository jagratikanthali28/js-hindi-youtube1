//immediately invoked function expressions(iife)

//function chai(){
 //   console.log(`DB CONNECTREC`);
//}() // this will give syntax error


(function chai(){
    //named II
    console.log(`DB CONNECTREC`);
})();
//chai()      ()()   after end of iife we have to use ;

((name)=>{
    //parameter pass IIff
    console.log(`DB CONNECTED TWO ${name}`);
}) ('jagrati')

