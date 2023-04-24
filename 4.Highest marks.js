const prompt = require("prompt-sync")({ sigint: true});
inputArray = [];

for(let i = 0; i<5; i++){
    inputArray[i] = Number(prompt("ENter the makrs of Student "+(i+1)+" : "));
}

let max = inputArray[0];
let maxindex = 0
for(let j = 0; j<5; j++){
    if(inputArray[j] < inputArray[j+1]){
        max = inputArray[j+1];
        
    }
}

console.log("Highest marks is " + max);
