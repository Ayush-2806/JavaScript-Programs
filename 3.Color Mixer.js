const prompt = require("prompt-sync")({ sigint: true});
const color1 = prompt("Enter the first color : ");
const color2 = prompt("Enter the second color : ");

if((color1 == "red"  && color2 == "blue")  || (color1 == "blue" && color2 == "red")){
    console.log("Mixed color is : purple");
}

if((color1 == "red"  && color2 == "yellow")  || (color1 == "yellow" && color2 == "red")){
    console.log("Mixed color is : orange");
}

if((color1 == "yellow"  && color2 == "blue")  || (color1 == "blue" && color2 == "yellow")){
    console.log("Mixed color is : green");
}

else{
    console.log("Invalid color combination");
}