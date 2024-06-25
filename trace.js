

// const currentTime = (()=>{
//     const date =new Date();
//     const result =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//     console.log(result);
// }
// )
// setInterval(currentTime,3000)


function greet() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greetuser;
    
    if (currentHour < 12) {
        greetuser = "Good morning Mr OLAWALE!";
    } else if (currentHour < 18) {
        greetuser = "Good afternoon Mr OLAWALE";
    } else {
        greetuser = "Good evening Mr OLAWALE";
    }

return(greetuser)}

   

console.log(greet());
