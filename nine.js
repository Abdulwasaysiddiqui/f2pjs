function hello(){
    console.log("HELLO WORLD,");
}
hello()


// Func with PARAmetre
function person (name , age , grade){
    return name + "" + age + "" + grade ;
}
let myValues = person ("Mustafa" , "1" , "U");

function sum (a,b){
    console.log(`The sum of a + b ${a+b}`);
}
sum(30,50)


let gameNum = 85;
let userNum = prompt("Enter Your Number");
let (userNum!= gameNum){
    userNum = prompt("You Guess the wrong number : GUESS AGAIN PLZ")
}
swal({
    title: "CNGRTS!",
    text: "WIN GAMES.",
    imageUrl: "images/thumbs-up.jpg"
  });
