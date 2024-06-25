//import our module
const { log } = require('console')
const fs =require ('fs')

//function to read file
const readFile = (path, encode)=> {
    return new Promise((resolve,reject)=>{
        fs.readFile(path, encode, (error,data)=>{
            if (error) {
                reject(error)
        
            } else {
                resolve(data)
                console.log(data.toString())
                console.log("file read successfully");
            }
        })
    })
}

//function for append
const appendFile = (path,content) =>{
    return new Promise ((resolve, reject)=>{
        fs.appendFile(path, content, (err)=>{
            if (err) {
                reject(err)
            } else {
                resolve()
                console.log('File successfully updated')
            }
        })
    })
}

//function to read file
const readFilet = (path, encode)=> {
    return new Promise((resolve,reject)=>{
        fs.readFile(path, encode, (error,data)=>{
            if (error) {
                reject(error)
            } else {
                resolve(data)
                console.log(data.toString())
                console.log("file reread successfully");
            }
        })
    })
}
//function for delete
const deleteFile = (path) =>{
    return new Promise ((resolve,reject)=>{
        fs.unlink(path, (err)=>{
            if (err) {
                reject(err)
            } else {
                resolve()
                console.log('file successfully updated')
            }
        })
    })
}


//Final solution
const solution = async()=>{
    try {
        //Read the file
        await readFile('./boysInBackend.txt', 'utf8');
        //Append to the file
        await appendFile('./boysInBackend.txt', '\n7. Olawale\n8. Anthony \n9. Zico')
        //read the file again
        await readFilet('./boysInBackend.txt', 'utf8')
        //delete the file
        await deleteFile('./boysInBackend.txt')
    } catch (e) {
        console.log(e.message)
        console.log("all file suucessfully updated");
    }
}
solution()