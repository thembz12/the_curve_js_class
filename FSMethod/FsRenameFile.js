

const fs = require ("fs")

fs.rename("./salamiboys1.txt", "salamiboys2s.txt",(error)=>{
    if(error){
        console.log(`error`);
    }
    else{
        console.log("nsuccess");
    }
}) 


// const fs = require("fs")

const rename = fs.renameSync("package.json", "element.js")
console.log(rename);





// C- create
// R- rename
// U- update 
// D- delete
