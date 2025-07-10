const myObject= {
    js: 'javascript',
    cpp: 'c++',
    rb: "rubby",
    swift:"swift by apple"
}

for(const key in myObject)
{
    console.log(`${key} shortcut is for ${myObject[key]}`)
}