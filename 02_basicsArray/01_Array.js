//array
const myArr=[0,1,2,3,4];
const myHeroes=["shakti","naggg"];
const info=["rahul",86,"delhi"];
console.log(myArr);
console.log(myHeroes[1]);
myArr.push(6);
myArr.push(7);
myArr.pop();
myArr.unshift(9);
myArr.shift();
console.log(myArr.includes(9));
console.log(myArr.indexOf(6));
console.log(myArr);

const newArr=myArr.join()
console.log(newArr);

//slice , splice
//console.log("A",myArr);
console.log(myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log(myArr);
//console.log("B",myArr);

const myn2=myArr.splice(1,3);
console.log(myn2);
console.log(myArr);