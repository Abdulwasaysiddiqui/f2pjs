let userName = prompt("Enter Your Name")
console.log(userName);

let math = parseInt(prompt("Enter Your Maths Number"));
let eng = parseInt(prompt("Enter Your Eng Number"));
let urdu = parseInt(prompt("Enter Your Urdu Number"));
let phy = parseInt(prompt("Enter Your Phy Number"));
let comp = parseInt(prompt("Enter Your Comp Number"));

let obtainedMarks = math + eng + urdu + phy + comp ;

// per formula
let per = obtainedMarks/500*100;
console.log(per);

if(per >=90 && per <=100){
    console.log("Your grade is A+1")
}
else if(per >=80 && per <=90){
    console.log("Your grade is A+")
}
else if(per >=70 && per <=80){
    console.log("Your grade is A")
}

else if(per >=60 && per <=70){
    console.log("Your grade is B")
}

else if(per >=50 && per <=40){
    console.log("Your grade is C")
}
else if(per >=330 && per <=40){
    console.log("Your grade is U")
}

else{
    console.log(" MISSION IS FAILED!.... SORRY!")
}