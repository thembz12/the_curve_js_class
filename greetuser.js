const http = require ("http")
PORT = 2929

const server = http.createServer((req,res)=>{
    res.setHeader("200",{"contect-type":"text/plain"})
    res.end("Hello Olawale")
})

server.listen(PORT,()=>{
    console.log(`server on ${PORT}`);
})
