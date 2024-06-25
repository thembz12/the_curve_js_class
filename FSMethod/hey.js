// const fs = require("fs")



// write = fs.writeFile("./olawale.txt", "2. olawale", "utf8", (error)=>{
//     if(error)
//         console.log("there was an error writing")
//  else{
//     console.log("file successfully created")
// }})


// // const fs = require("fs")
// // const dembz = fs.writeFileSync =("./please.txt", "1. mr funny", "utf8")
// // console.log("success created")

const fs = require ("fs")

fs.rename("./JnrSchstudent.txt", "snrSchstudents.txt", "utf8", (error)=>{
    if (error){
    console.log("there error was trying to rename")
}  else{
    console.log("successfully renamed")
}

}

)