const http = require ('http');
const PORT = 8080

const studentData = [{"ame":"dembele", "stack": 'backend', "age":4}, {'name': "olawale", "stack":'backend', 'age':4}]
const Server = http.createServer((req, res)=>{
    res.writeHeader(200,{"content-Type": "application/json"})
     res.end(JSON.stringify(studentData))
})
Server.listen(PORT, ()=>{
    console.log(`server is listening to port: ${PORT}`);
})