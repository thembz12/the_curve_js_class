const fs = require ("fs")

const deleteFile = ()=>{
    return new Promise((resolve, reject)=>{
        fs.unlink("./names.txt",(error)=>{
            if(error){
                reject(error)}
                else{
                    resolve()
                }
        })
    })
}
deleteFile()