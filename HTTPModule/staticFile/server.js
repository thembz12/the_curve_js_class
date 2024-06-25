const ourhttp = require ("http")
const PORT = 2020
const fs = require ("fs")

const Server = ourhttp.createServer((req , res)=>{
   switch(req.url){
    case "/frontend":
    
    fs.readFile(".pages/frontend.html",(error, data)=>{
        if(error){
            alert("err reading file");
        }else{
            res.end(data)
        }
    })
        break;

    case fs.readFile("./pages/backend.html", (error, data)=>{
        if(error){
            console.log("err reading file");
        }else{
            res.end(data)
        }
    }):
    break;

    case fs.readFile("./pages/intructor.html", (error, data)=>{
        if(error){
            console.log("err reading file");
        }else{
            res.end(data)
        }
    }):
    break;

    default:homepage
    fs.readFile("./pages/homepage.html", (error, data)=>{
        if(error){
            console.log("err reading file");
        }else{
            res.end(data)
        }
    

})}
})

Server.listen (PORT,()=>{
    console.log(`serveri listening to port${PORT}`);

})