const prompt = require("prompt-sync")({ sigint: true});
let username = prompt("Enter your name : ")
let cap = username[0].toUpperCase();
let newstring = cap + username.slice(1);
(username[0] != username[0].toUpperCase()) ? console.log(newstring) : console.log(username);
    

 



   