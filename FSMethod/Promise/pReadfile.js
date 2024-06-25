const fs = require ("fs")
const readDocu = ()=>{
    return new Promise((resolve, reject)=>{
        fs.readFile("./olawale.txt", (error, data)=>{
            if (error){
                reject(error)
                console.log('error trying to read file');
            }else{
                resolve();
                console.log(data.toString());
            }
        }    )
    })}

    readDocu();