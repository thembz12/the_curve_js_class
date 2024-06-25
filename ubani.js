// const fs = require("fs")

// const writeFile = async ()=>{
//     try{
//         fs.writeFile("./Names of Salami boys", "1.sunday \n2. saraki \n3.ojemuta", "utf8",()=>{
//             if (error){
//                 console.log("throw error");
//             }else {
//                 console.log("successful");
//             }
//         })
//     }
// }



const getOneStudent = async (req, res, id) => {
    try {
        // const student = await studentDB.find((student) => student.id === parseInt(id));
        const student = await studentDB.find((student) => student.id == id);
        if(!student) {
            res.setHeader("200", { "Content-Type": "text/plain" })
            res.end(`Student with ${id} not found`)
        } else {
            res.setHeader("200", { "Content-Type": "text/plain" })
            res.end(JSON.stringify(student))
        }
    } catch (error) {
        res.end(JSON.stringify(error.message))
    }
}