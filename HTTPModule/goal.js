const http = require ("http")
const PORT = 8080

const studentDB = require ("./db.json");

const readAll = (data)=>{
    return new Promise ((resolve, rejects)=>{
        resolve(data)
    })
}
const getAllStudents = async (req, res)=>{
    try{
        const students = await readAll(studentDB);
        res.write(`the total number of student in this Database is ${students.length} \n`)
        res.end(JSON.stringify(students))
    }catch(error){
        res.end(JSON.stringify(error.message))
    }
}

const getOneStudent = async (req, res, id) => {
    try {
       
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

const Server = http.createServer((req, res)=>{
    try{
    if(req.url==='/'){
    console.log(req.url);
    res.setHeader("200", {"content-Type":"tetx/plain"})
    res.end("Welcome to wilmer backend hub database")
    }else if (req.url === `/allstudents`){
        console.log(req.url);
        res.setHeader("200", {'content-Type':"application/json"})
        getAllstudents(req, res)
    }
    else if(req.url.match('/onestudent\/([0-9]+)')){
        console.log(req.url);
        res.setHeader("200",{"content-Type": "application/json"})
        let id = req.url.split('/')[2]
        getOneStudent(req,res,id)
    }
}catch(error){
       res.end(JSON.stringify(error.message)) 
    }
});

Server.listen(PORT,()=>{
    console.log(`server is listening to port:${PORT}`);
})


