const prompt = require("prompt-sync")({ sigint: true});
let name = prompt("Enter your name : ").toLowerCase();
console.log(name);
let len = name.length;
let vowelCount = 0;
for(i = 0;i<len;i++){
    if(name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u" ){
        vowelCount++;
    }
}

console.log("Total vowels in name is : " + vowelCount);