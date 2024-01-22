let grade = prompt("Enter Yor Grade!")
let per = parseInt(prompt("Enter Your Per"));
// TURNARY OPERATION

let result = grade === "A" && per === 90 || grade === "B" && per === 80 || grade === "C" && per === 80 || grade === "D" && per === 80 ? "PASS" : "FAIL SORRY";
 console.log(result);

