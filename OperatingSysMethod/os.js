Array = ['totalemory', 'mymemory']
const os =require ("os");

const myMemory = os.freemem();
console.log("free memory:",myMemory)

const totalmemory = os.totalmem();
console.log("total memory:",totalmemory);

const systemawake = os.uptime()
console.log(systemawake);
const bat =totalmemory -myMemory;
console.log("memory screenLeft:",bat);

// const compatible = (myMemory + totalmemory)/2
// myMemory= Math.floor(Math.random()*100),
// totalemory = Math.floor(mat.random()*100)
 

// console.log(compatible);
