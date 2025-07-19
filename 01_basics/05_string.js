console.log("strings");
const name="jagrati"
const repoCount=50
console.log(name+repoCount+"value")

//string interpolation
console.log(`this is my ${name} and my repocount ${repoCount}`);

const gameName= new String('jagartiv')
console.log(gameName[0]);   //j 
console.log(gameName._proto_);     

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));
const newString=gameName.substring(0,4);
console.log(newString);
const newString1="   jagrati  ";
console.log(newString1);
console.log(newString1.trim());
const url="https://jagrti.com/Jgarati%20kanthali";
console.log(url.replace('%20','-'));

console.log(url.includes('meenu'));
console.log(gameName.split('-'));

//string length
//str.length  use to find the length of string
let s1="jagrti kanthali";
console.log(s1);
let sp=`this is a template ${s1}`;
console.log(sp);