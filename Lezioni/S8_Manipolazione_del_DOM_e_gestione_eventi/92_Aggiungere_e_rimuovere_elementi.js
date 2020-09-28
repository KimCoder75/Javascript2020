//file di diferimento indexNew.html
//createElement
//appendChild
let sezione = document.querySelector('section');
// creo un nuovo div in document
const nuovoDiv = document.createElement('div');
// creo un nuovo nodo testo in document
const testo = document.createTextNode('BLOCCO 4');
// adesso inserisco il testo nel div
nuovoDiv.appendChild(testo);// alla fine
//inserisco div nella sezione
// sezione.appendChild(nuovoDiv);
sezione.prepend(nuovoDiv); //all'inizio

const nav = document.querySelector('nav');
const link3 = nav.children[2];
const nuovoLink = document.createElement('a');
nuovoLink.appendChild(document.createTextNode('LOGO'))
nav.insertBefore(nuovoLink,link3);
nav.remove();
document.querySelector('section > div:last-child').remove();
