console.log("Array 2");
const m1=["jag","meenu","garui","raja"];
const m2=["kakul","disha","tapu","saloni"]
//m1.push(m2);
const ans=m1.concat(m2);
console.log(m1);
console.log(m2);
console.log(ans);
console.log(m1);
console.log(m2);
//console.log(m1[4][0]);
const allNew=[...m1,...m2];
console.log(allNew);

console.log(Array.isArray("jagrati"));
console.log(Array.from("jagrstuvv"));
console.log(Array.from({name:"jagrati"}));  //imp
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));

