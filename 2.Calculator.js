const prompt = require("prompt-sync")({ sigint: true});
const number1 = Number(prompt("Enter the 1'st number : "));
const number2 = Number(prompt("Enter the second number : "));
const operator = prompt("Enter the operator : ");

switch(operator){

    case "+": {
        const result = number1 + number2;
        console.log("Result = " , result);
        break;
    }

    case "-": {
        const result = number1 - number2;
        console.log("Result = " , result);
        break;
    }

    case "*": {
        const result = number1 * number2;
        console.log("Result = " , result);
        break;
    }

    case "/": {
        const result = number1 / number2;
        console.log("Result = " , result);
        break;
    }

    default : console.log("invalid operator");

    
}
