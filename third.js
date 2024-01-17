let age = 21;
if(age>=20){
    console.log("you can caste your vote");
}
if(age<=20){
    console.log("you can not caste your vote");
}
if(age<20){
    console.log("you can not caste your vote");
}
else{
    console.log("you can not caste your vote");
}

let userName =prompt ("ENTER YOUR AGE");
console.log(userName);

let mode = prompt (`ENTER YOUR MODE
1)DARK
2)LIGHT`)
let color ;

if (mode=== "DARK"){
    color = "BLACK";
}
if (mode=== "LIGHT"){
    color = "WHITE";
}
console.log(color);