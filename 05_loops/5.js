const coding =["js","cpp","ruby","java"];
coding.forEach(element => {
    
});
//calculate sum of 1 to 5
let sum=0;
for(let i=1;i<=5;i++)
{
    sum=sum+i;
}
console.log(sum);

//for of loop  mainly apply on array and string
let str="jagrati kanthali";
for(let i of str)
{
  // console.log(i);
}

let obj1={
    name:"jaggu",
    age:20,
    city:"mumbai",
    cgpa:7.5,
}
for(let i in obj1)
{
    console.log(i);
}

//print all even from 0 to 100
for(let i=0;i<=100;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}
