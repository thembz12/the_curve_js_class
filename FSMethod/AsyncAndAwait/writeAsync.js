const fs = require("fs")

const writeDocu = async ()=>{
    try{
        fs.writeFile("./Animal.txt", "\n1.gota \n2.cat \n3.rat", 'utf8', ()=>{
            console.log("file successsflly written");
        })
    }catch(error){
        console.log(error.message)
    }
};

writeDocu()





