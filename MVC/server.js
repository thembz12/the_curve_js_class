const ourhttp = require ("http")
const PORT = 2929

const {getAllStudent, getOneStudent} = require("./controller/studentController")

const olaServer = ourhttp.createServer ((req,res)=>{
    try{
    if(req.url==`/`){
        res.setHeader("200", {"content-type": "text/plain"})
    res.end("My name is THEMBELE");
     } else if(req.url==`/allstudent`){
      res.setHeader("200",{"content-Type":"application/json"})
      getAllStudent(req,res)


     }else if (req.url.match("/onestudent\/([0-9]+)")){
        res.setHeader("200",{"content-Type":"application.json"})
        let id = req.url.split("/")[2]
        getOneStudent(req, res, id)
     }


}catch(error){
    res.end(JSON.stringify(error.message))
}
})

olaServer.listen (PORT,()=>{
    console.log(`server is connected on ${PORT}`);
})