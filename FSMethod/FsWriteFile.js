//  fs module

// const fs = require ("fs")
// fs.writeFile(`./backendstudents.txt`, `1. wale`, "utf8", (error )=>{
//     if(error){
//         console.log(`there was an error tryin to create this file `)
//     }
//      else{
//         console.log("file created successfully")}
// })
    



// //const fs = require('fs')
// const filewritten = fs.writeFileSync('./frontendstudents.txt', '1. olaxcdWALE',"utf8");
// console.log('success')



const fs = require(`fs`)

WRfile = fs.writeFile(`./olawale.txt`,` ANIMAL`, `utf8`,(error)=>{
 if(error){
    console.log(`error writing file`)
 } else{
    console.log(`file created successfully`)}
})

RDFile = fs.readFile(`./olawale.txt`,(error,data)=>{
    if(error){
        console.log(`error readig file`)
    }else{
        console.log(data.toString());
    }
})

APDFile = fs.appendFile(`./olawale.txt`,`\n1. goat \n2. cat \n3. pig \n4 fowl`, `utf8`,(error)=>
{if(error){
    console.log(`error appending file`)
}else{
    console.log(`successfully`)
}

})
