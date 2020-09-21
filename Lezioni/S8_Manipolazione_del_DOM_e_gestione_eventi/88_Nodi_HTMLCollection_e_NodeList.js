let sezione = document.getElementById('section1');
let figli = sezione.querySelectorAll('#section1 div');
let figli2 = sezione.children
sezione.appendChild(document.createElement('div'));
console.dir(figli);// querySelectorAll restituisce una NodeList statico
console.dir(figli2);// children restituisce una HTMLCollection dinamico
