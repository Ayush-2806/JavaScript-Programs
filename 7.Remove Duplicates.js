const prompt = require("prompt-sync")({ sigint: true});
let totalItemsInCart = Number(prompt("Enter the total item in cart : "));
let arr = [];
for(i = 0; i<totalItemsInCart;i++){
    arr[i] = (prompt("Enter the items : "))
}

 let uniqueArray = []


for(i of arr){
    if(uniqueArray.indexOf(i) === -1)
    uniqueArray.push(i);
}


console.log(uniqueArray);