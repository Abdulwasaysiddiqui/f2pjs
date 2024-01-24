//        DOCUMENT OBJECT MODLE

// let word = document.getElementById('para');
// word.innerHTML = "KESY HO";
// word.style.backgroundColor = "cyan";
// // word.id = "world";
// // word.classList.add("HELLO");


// console.log(word);

let elem = document.getElementById('second');
// console.log(elem);
// elem.innerHTML = "AN APPLE A DAY!"
elem.textContent = "AN APPLE A DAY!"
elem.style.backgroundColor = "yellow";
elem.style.textAlign = "center";
elem.style.padding = "20px";
elem.classList.add('two');
elem.classList.remove('two');



let myDiv = document.getElementsByClassName('container');
myDiv[0].innerHTML = "BATCH CODE!"
myDiv[0].style.backgroundColor = "purple"
myDiv[0].style.color = "white";
myDiv[0].style.textAlign = "center";
myDiv[0].style.fontSize = "40px";
myDiv[0].classList.add('three');

let newElem = document.createElement('p');
myDiv[0].appendChild(newElem);
newElem.innerHTML = "BATCH CODE!"
let pencil = document.createElement('img');
newElem.appendChild(pencil);
pencil.src = "1.png";