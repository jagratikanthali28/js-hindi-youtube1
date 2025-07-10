// for of loop 
//object inside array

//["", "", ""]
//[{}, {}, {}]


const arr=[1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}

const arr2=[1,267,4,34];
for (const key in arr2) {
    {
        const element = arr2[key];
        console.log(element);
    }
}

//Map

const map=new Map();
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('Fr',"France")
//console.log(map);
for(const [key, value] of map)
{
    console.log(key, ':-', value);
}

const MyOnject={
    'game1': 'NFS',
    'game2': 'Spiderman'
}
for(const [key, value] of MyOnject)// this loop will give error it willl work fine for map but not for object
{
    console.log(key, ':-', value);
}
