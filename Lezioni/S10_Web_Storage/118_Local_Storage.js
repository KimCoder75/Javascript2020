/*
* window.localStorage
* window.sessionStorage
*/
// i dati non rimangono in memoria se la
// il browser cancella la cronologia
// console.log(window.Storage);
window.localStorage.setItem('Nome','Kim');
window.localStorage.setItem('Cognome','Malcaus');
window.localStorage.setItem('anni','45');
window.localStorage.setItem('passioneA','Programmazione');
window.localStorage.setItem('passioneB','Disegno');

console.log(localStorage);
localStorage.removeItem('anni');
localStorage.removeItem('nome');
console.log(localStorage);
