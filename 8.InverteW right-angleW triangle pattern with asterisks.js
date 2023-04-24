const prompt = require("prompt-sync")({ sigint: true});
let n = prompt("Enter a number : " )
let string = "";
for(let i = 0;i<n;i++){
    for(let j = 0;j<(n-i);j++){
        string += "*";
    }
    string += '\n';
}

console.log(string);