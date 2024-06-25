const fs= require('fs')
const updatDocu = async ()=>{
    try{
        fs.appendFile("./yusuf.txt", "house \n4 group \n5. yahoo",()=>{
            console.log("File appended successfully");
        })
    
    }catch(error){
        console.log(error.message)
        console.log("err");
    }
}
updatDocu()

