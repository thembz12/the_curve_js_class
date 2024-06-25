const fs = require("fs");

fs.unlink("./graceFC1.txt", (error)=>{
    if(error){
        console.log("error trying to delete this file")
    }else{
        console.log("deleted")
    }
    console.log("program successfully done")})


    
// const fs = require("fs")

// const deleteMe = fs.unlinkSync("./namesofbackendstudents.txt")
//     console.log("deleted.")