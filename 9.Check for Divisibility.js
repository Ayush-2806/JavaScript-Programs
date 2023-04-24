const prompt = require("prompt-sync")({ sigint: true});
let  num = Number(prompt("Enter the size of array : "));
let arr = [];
for(let i = 0; i < num; i++){
    arr[i] = Number(prompt("Enter the array elements : ")); 
}

for(let j = 0; j<num;j++){
    if(arr[j]%3 == 0 && arr[j]%2 !=0){
        console.log(arr[j]);
    }
    else{
        continue;
    }
}
