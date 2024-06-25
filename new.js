

const fs = require ("fs")

const ReadAppendDelete = (path, encode)=>{
    return new Promise((resolve, rejects)=>{
    fs.readFile(path, encode, (error, data)=>{
        if(error){
            rejects(error);
            console.log("err reading fie");
        }else{
            resolve();
            console.log(data.toString());
        }
    }
    )}

)}


   
    const appendFile = (path, content)=>{
        return new Promise((resolve, reject)=>{
            fs.appendFile(path, content, (error)=>{
                if(error){
                  reject(error)
                } else {
                resolve();
                  console.log("Appendsuccessfully");
                }


        })})}
        


const ReadAppendDeletee = (path, encode)=>{
    return new Promise((resolve, rejects)=>{
    fs.readFile(path, encode, (error, data)=>{
        if(error){
            rejects(error);
            console.log("err reading fie");
        }else{
            resolve();
            console.log(data.toString());
        }
    }
    )}

)}


const deleteFile = (path)=>{
    return new Promise ((resolve, reject)=>{
        fs.unlink(path, (error)=>{
          if (error){
            reject(error)
            console.log('err deleting file');
        }else{
            resolve()
            console.log("file delee successfully");
        }
    })
})}


const ReadAllFile = async ()=>{
    try{
       await ReadAppendDelete("./promise.txt","utf8")
       await appendFile(`./promise.txt`, `\n6. ramon \n7.kemi \n9.toyosi` )
        await ReadAppendDeletee("./promise.txt", "utf8")
       await deleteFile("./promise.txt")
        console.log("err reading all files");

    }catch(e){
        console.log(e.message);
        console.log("file deleted successfully");

    }}
    ReadAllFile()