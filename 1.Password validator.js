const prompt = require("prompt-sync")({ sigint: true});
let a = prompt("Enter your password : ");
let b = prompt("Confirm your password : ");


if(a === b){
   console.log("Password Matched. Password validation Successful.");
}

else{
    console.log("Password didn't match. Password validation unsuccessful");
}