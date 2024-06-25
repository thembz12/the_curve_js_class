const fs = require ("fs")
const deleteDocu = async ()=>{
    try{
        fs.unlink("./Animal.txt", (error)=>{
            console.log('successfully deleted');
        })
    }catch(error){
        console.log(error.message);
    }
}

deleteDocu();