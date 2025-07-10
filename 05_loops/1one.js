//for loop
for(let i=0;i<=10;i++)
{
    const ele=i;
    console.log(ele);
}
//console.log(ele);    cannot use outside

for(let i=0;i<=10;i++)
{
    if(i==5)
    {
      console.log("5 is availavbe");
    }
    console.log(i);
}

for(let k=0;k<=10;k++)
{
    for(let i=2;i<=4;i++)
    {
        console.log(`this is inner lool ${i}`);
        console.log(i+ `*` +k+ ` = ` + i*k );
    }
    console.log(`this is outer loop ${k}`);
}

//array 
let arr=["kagg","meenu","gauri","disha"];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log(arr.length);

//break
for(let index=0;index<10;index++)
{
    if(index==8)
    {
        console.log(`detected ${index}`);
        break
    }
    console.log(`valid of index ${index}`)
}

//continue
for(let index=0;index<10;index++)
{
    if(index==5)
    {
        console.log(`detected ${index}`);
        continue;
    }
    console.log(`valid of index ${index}`)
}
