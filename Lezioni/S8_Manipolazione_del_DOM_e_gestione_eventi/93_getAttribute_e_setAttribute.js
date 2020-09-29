// creo un punto di ancoraggio sul padre degli elementi
const nav = document.querySelector('nav'); // approfondire selettori css
// creo nuovo elemento nel documento
logo = document.createElement('a');
//creo un nuovo nodo di testo
logoTesto = document.createTextNode('LOGO');
//aggiugo il nodo testo come ultimo elemento della lista di a
logo.appendChild(logoTesto);
// aggiungo l'attributo href al nuovo elemento
logo.setAttribute('href','index.html');
// aggiugo il nuovo elemento come primo figlio dell'elemento padre
nav.prepend(logo);


// creo un punto di ancoraggio sul padre degli elementi
const div = document.querySelector('#section1 > div'); //# indica l'id
// Attribuisco la classe b1 e b2 all'elemento selezionato
div.setAttribute('class','b1 b2');
//utilizzo getAttribute per sapere che classe è applicata all'elemento selezionato
console.log(div.getAttribute('class')); // uso console.log come metodo di conrollo
// interrogo div per verificare la lista delle classi
console.dir(div.classList);
// -omesso - div.setAttribute('class','b1 b2');
// uso la proprietà add di classList per aggiungere b1
// div.classList.add('b1');
// console.log(div.classList);
