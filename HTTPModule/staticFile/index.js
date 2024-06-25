// const ourhttp = require ("http")
// const PORT = 3030

// const server = ourhttp.createServer((res, req)=>{
// res.writeHead(200,{"content-Type":"text/plain"})
// res.end("my name is jd THEMBELE")
// })

// server.listen (PORT,()=>{
//     console.log(`serveri listening to port${PORT}`);

// })


const http = require ("http")
const PORT = 2020

const server = http.createServer((req,re)=>{
    res.writeHead("200", {"content-type":"text/plain"})
        res.end("hello THEMBELE")
    
})

server.listen(PORT,()=>{
    console.log(`I'm connected to ${PORT}`);
})







