 console.log("welcome to pjs");
console.log("Hello world");

// DATA TYPES

name = "MIKE";   // String
num = 908898;   //number
x = "undifined";  //undefined
y = "null";         //null
boolean = "true"   // Boolean

console.table(name , num , x , y , boolean);


// We Have Two Data Types

// PRIMITIVE DATA TYPES : STRING NUM BOOLEAN ETC
// NON-PRIMITIVE DATA TYPES : Array  object Functions ETC


let obj={
    name : "Zayyan",
    age : 22,
    grade : "A+",
    phone : 112233,
    city : "Islamabad",

}

// FIRST METHOD TO GETTING VALUES OF AN OBJECT

console.log(obj["name"]);
console.log(obj["phone"]);


// Second METHOD TO GETTING VALUES OF AN OBJECT

console.log(obj.city);

// For in loop
for (let i in obj){
    console.log(i , obj[i])
} 