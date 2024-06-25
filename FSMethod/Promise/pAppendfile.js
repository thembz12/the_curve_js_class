
 const fs =require ('fs')
 const updateFile =()=>{
     return new Promise((resolve, reject)=>{
         fs.appendFile("./names.txt", "\n4. Olawale\n5 charles\n6 Isah\n7 christian",(error)=>{
             if (error){
                 reject(error)
             }else{
                 resolve()
             }
         } )
     })
 }
 
 updateFile()
 