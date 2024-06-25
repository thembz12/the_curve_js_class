const fs = require  ("fs")

const readDocu = async ()=>{
    try{
     fs.readFile("./Animal.txt",(error,data)=>{
       if(error){
        console.log("file successfully read");}
        else{
            console.log(data.toString());
        }
     })
    } catch(e){
        console.log(e.message);
    }
}
readDocu();