const http = require ('http')
const PORT = 8080
const fs = require ("fs")

const Server = http.createServer((req, res)=>{
    console.log(req);
res.writeHead(200,{'content-type' : `text/html`})
fs.readFile("./index.html", (error, data)=>{
    if(error){
        console.log("err reading file");
    }else{
        res.end(data.toString())
    }
})})



// // const Server = http.createServer((req, res)=>{
// //     res.writeHead(200,{"content-Type": "application/json"})
// //      res.end(JSON.stringify(studentData))
// })
Server.listen(PORT, ()=>{
    console.log(`server is listening to port: ${PORT}`);
})


