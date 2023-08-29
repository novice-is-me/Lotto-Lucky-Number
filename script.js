function generatedNumber(){

    // array for the random number
    let arrayNum = []; 

    // for loop for loping 6 random number
    for (let i = 0; i<=5; i++){
        let randomNum = Math.floor(Math.random()*42);
        arrayNum.push(randomNum);
    } 
    console.log(arrayNum);
    document.getElementById("generatedNumberField").value = arrayNum;   
} 
 