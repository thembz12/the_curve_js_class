const fs = require('fs')
const createDocument = ()=>{
    return new Promise((resolve, reject)=>{
        fs.writeFile("./names.txt", 
        "names of backend students\n1. Patience\n2. John \n3. Ibrahim", "utf8", (error)=>{
            if (error){
                reject(error)
            }else{
                resolve()
            }
        }    
        )
    })}
createDocument();