// const http = require ("http")
// const studentDB = require ("../Model/studentDB.json")


// const readAll =(data)=>{
//     return new Promise ((resolve, rejects)=>{
//         resolve(data)
//     }
// )}

// const getAllStudent= async (req,res)=>{
//     try{
//         const student = await readAll(studentDB);
//         if(!student){
//             res.end(`student database empty`)
//         }else{
//             res.write(`the total number students in the database is ${student.lenght}`)
//             res.end(JSON.stringify(student))
//         }
//     }catch(error){
//         res.end(JSON.stringify(error.message))
//     }
// }

// const getOneStudent = async (req, res, id)=>{
//     try{
//         const student = await studentDB.find((student)=>student.id==id)
//         if(!student){
//             res.setHeader("200", {"content-type":"text/plain"})
//             res.end(`student with${id} not found`)
//         }else{
//             res.setHeader("200", {"content-type":"text/plain"})
//             res.end(JSON.stringify(student))
//         }
//     }catch(error) {
//         res.end(JSON.stringify(error.message)
//    ) }
// }

// module.exports = {getAllStudent, getOneStudent}

const http = require ("http")
const studentDB = ("../Model/studentDB.json")

const readAll = (data)=>{
    return new Promise ((resolve, rejects)=>{
        resolve(data)
    })
}

const getAllStudent = async (req,res)=>{
    try{
        const student = await readAll(studentDB)
        if(!student){
            res.end("studentDB is empty")
            res.end(JSON.stringify(student))
        }else{
            res.write(`total number of students is ${student.length}`)
            res.end(JSON.stringify(student))
        }
    }catch(error){
        res.end(JSON.stringify(error.message))
    }
}

module.exports = (getAllStudent)