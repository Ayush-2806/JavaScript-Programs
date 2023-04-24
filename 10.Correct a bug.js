const prompt = require("prompt-sync")({ sigint: true});
let  num = Number(prompt("Enter the size of array : "));
let arr = [];
for(let i = 0; i < num; i++){
    arr[i] = Number(prompt("Enter the array elements : ")); 
}

let doublequantity = (arr) =>{
    for(let i = 0;i<num;i++){
        arr[i] = (arr[i] * arr[i]);
    }
    return arr;
}

console.log(doublequantity(arr));