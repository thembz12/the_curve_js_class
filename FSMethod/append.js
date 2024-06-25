 addfile = fs.appendFile("./backendstudents.txt", `\n3. alabi`, "utf8", (error)=>
    {
    if(error){
        console.log(" there was an error trying to update the file");
    } else{
        const fs = require("fs")
console.log("successfully updated.");
     }
  })


 const fs = require("fs");

//const updatedFile = fs.appendFileSync("./frontendstudents.txt", "\n2. reeader, \n3. thembz, \n4.wale", "utf8")
//console.log("file successfully updated.");
