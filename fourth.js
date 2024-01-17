// FOR LOOP

for(let i=0; i<=10; i++){
    console.log("This Is FOR LOOP " , i);
}
// WHILE  LOOP
let num= 15;

while(num<=20){
    console.log("THIS IS WHILE LOOP" , num);
    num++;
}
// DO WHILE LOOP
let a=50;
do{
    console.log("THIS IS DO WHILE LOOP" , a);
    a++;
}while(a<49);
// FOR IN LOOP
let obj = {
    name : "Mike" ,
    age : 20 ,
    grade : "A+"
}

for(let z in obj){
    console.log(z , obj[z])
}


// TASK NO 1

let5=prompt("Enter Your Value")
for (let w=1; w<=10; w++){
    console.log("5x" , w, "=",5*w);
}
