const fs = require('fs');

fs.readFile("./backendstudents.txt",(error,data)=>{
    if (error){
        console.log("error trying to read file.")
    }else{
        console.log(data.toString());
    }
})

// const fs = require('fs');
 const readFile = fs.readFileSync("./frontendstudents.txt");
 console.log(readFile.toString());