
// const students=["princess","ibrahim","aminat","olawale","ihenacho"]

// const result = students.map((names)=>
// names.slice(0,1)+names.slice(1,2).toUpperCase()
// +names.slice(2,-2)+
// names.slice(-2, -1).toUpperCase()+names.slice(-1))
// console.log(result)


// let thembz =  (a,b,c)=>{
//  let answer = a * b / c
// //  let result = multiply / c

// if (answer %2===0){
//     console.log("the value of the functions is "+ answer +" and it is an even number ")
//     //return message
// } else{
//     console.log("the value of this function is "+`${Math.round(answer)}` +" and it is an odd number")
// //return message
// }}

// thembz(8, 2, 2);


const students =["princess","ibraheem","ameenat","olawale","ihenacho"]

const result = students.map((ola)=>
ola.slice(0,2)+
ola.slice(2,4).toUpperCase()+
ola.slice(4,6)+ 
ola.slice(6,7).toUpperCase()+
ola.slice(7)
)
console.log(`Names of backend students in class: ${result} `);
//console.log(ola);


