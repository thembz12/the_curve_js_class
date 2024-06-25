// alert("welcome")
let userName = prompt("Enter Username")

let password = prompt("Enter Password")
// console.log(userName.password)
if (userName =='ola'&& password==1234) {
    alert('Enter board')
} else if(userName=='ola' && password !=1234){
    alert('Valid UserName but Invalid password')
    
}else if(password==1234 && userName != 'ola'){
    alert('invalid username but valid password')
}
else{
alert('invalid username and invalid password')
}
console.log(userName);