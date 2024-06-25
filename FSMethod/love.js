    let objects = {
        name1 :"OLAWALE",
        name2 :"OLUWAFUMILAYO"}

    const lovePercentageMale=Math.floor(Math.random()*100)
    const lovePercentageFemale=Math.floor(Math.random()*100)

    const averageScore=(lovePercentageMale+lovePercentageFemale)/2;
    

let loveCalculator=()=>{

     let wale = objects.name1
     let oyin =  objects.name2
     console.log(`${wale}} you have ${lovePercentageMale}% love affection towards ${oyin}`);
    

}
setTimeout(loveCalculator,4000)

loveCalculator =()=>{
    let oyin= objects.name2
    let wale= objects.name1
    console.log(`${oyin} you have ${lovePercentageFemale}% love affection towards ${wale}`);

}
setTimeout(loveCalculator,6000)

loveCalculator=()=>{
    Love= `However i have calculated your score ,and i discovered that your love percentage is ${averageScore} hence this is my recommendation`
    console.log(Love)
}
setTimeout(loveCalculator,10000)

loveCalculator=()=>{
    if(averageScore>70){
        console.log("you guys are compatible")

    }else if(averageScore<=69 && averageScore>50){
        console.log("love slightly compatible")

    }else if(averageScore<=49 && averageScore>20){

        console.log("let go, you are not compatible")

    }else{
        console.log("no be and you")

    }
}


setTimeout(loveCalculator,12000)