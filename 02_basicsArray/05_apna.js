let inodr=[10,122,13,14,14];
console.log(inodr);
console.log(inodr.length);
for(let i=0;i<inodr.length;i++)
{
    console.log(inodr[i]);
}
console.log(typeof inodr);

//also for of and for in loop use to access the element of an array

let city=["mmumbai","delhi","sitamau","mandsuar","nasik"]
for(let arr of city)
{
    console.log(arr.toUpperCase());
}

let arr1=[85,97,44,37,76,60]
let sum=0;
for(let  i=0;i<arr1.length;i++)
{
   sum=sum+arr1[i];
}
let avg=sum/arr1.length;
console.log(`avg class of the marks =: ${avg}`);

let arr2=[250,645,300,900,50]
let arr3=[];
let j=0;
for(let i=0;i<arr2.length;i++)
{
    arr3[i]=arr2[i]-(arr2[i]*(10/100));
}
for(let arr of arr3)
{
    console.log(arr);
}

let foodItems=["potato","apple","litchi","tomato"];
foodItems.push("chips","burger");
console.log(foodItems)
foodItems.pop();
console.log(foodItems)
foodItems.toString();
console.log(foodItems)

let marks=[12,13,14,14];
console.log(marks)
console.log(marks.toString());

let fruit=["apple","mangoes","papay","MOG"];
let veggi=["tomotp","bhindi","pees"];
let noew=fruit.concat(veggi); //it returns new array
console.log(fruit);
console.log(veggi);
console.log(noew);

let arr=[1,2,34,5];
