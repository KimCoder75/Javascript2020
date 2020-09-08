/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

//Attenzione
//Math.floor(Math.random()* (max-min)+min); Il max è escluso e il min è incluso
//Math.floor(Math.random() * (max - min + 1)) + min; Il max è incluso e il min è incluso

//Variante 1
var inCart=[];
var nEstratti90=[];
var nEstratti;
var cut=Math.floor(Math.random() * (80));//Math.floor(Math.random() * (79 - 0 + 1)) + 0;

//--- da completare
// var nCart=[];
// var num=prompt("Inserisci un numero da 1 a 90", "inserisci un numero da 1 a 90")
// nCart,push(num)

var nCart=[1,47,29,36,12,15,18,43,56,11];
for (var i = 1; i <91; i++) {
nEstratti90.push(i);
}
for (let a = 0; a < nEstratti90.length; a++) {
let ind1=Math.floor(Math.random() * (90)); //Math.floor(Math.random() * (89 - 0 + 1)) + 0;
let ind2=Math.floor(Math.random() * (90));
let j;
j=nEstratti90[ind1];
nEstratti90[ind1]=nEstratti90[ind2];
nEstratti90[ind2]=j;

}
nEstratti = nEstratti90.slice(cut, cut+10)

for (let r = 0; r < 10; r++){
  let lr=r;
    for (let c = 0; c < 10; c++){
      let lc=c

      if (nEstratti[lr]==nCart[lc]) {

        inCart.push(nEstratti[lr])

                                         }
                                }
                              }
console.clear();
// console.log(`I numeri estratti sono: ${nEstratti}`);
// console.log(`I tuoi numeri sono: ${nCart}`);

switch (inCart.length) {

    case 1:
    alert(`I numeri estratti sono: ${nEstratti}\nI tuoi numeri sono: ${nCart}\n\nIl numero ${inCart[0]} è l'unico che hai in cartella,\npurtroppo non è sufficiente per vincere un premio.` );
    break;
    case 2:
    alert(`I numeri estratti sono: ${nEstratti}\nI tuoi numeri sono: ${nCart}\n\nI numeri vincenti sono: ${inCart}\nHai fatto ambo!`);
    break;
    case 3:
    alert(`I numeri estratti sono: ${nEstratti}\nI tuoi numeri sono: ${nCart}\n\nI numeri vincenti sono: ${inCart}\nHai fatto terno!`);
    case 4:
    alert(`I numeri estratti sono: ${nEstratti}\nI tuoi numeri sono: ${nCart}\n\nI numeri vincenti sono: ${inCart}\nHai fatto quaterna!`);
    break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    alert(`I numeri estratti sono: ${nEstratti}\nI tuoi numeri sono: ${nCart}\n\nI numeri vincenti sono: ${inCart}\nHai fatto cinquina!`);
    break;
    case 10:
    alert(`I numeri estratti sono: ${nEstratti}\nI tuoi numeri sono: ${nCart}\n\nI numeri vincenti sono: ${inCart}\nHai fatto Tombola!`);
    break;
    default:
    console.log(`I numeri estratti sono: ${nEstratti}\nI tuoi numeri sono: ${nCart}\n\nMi dispiace, hai perso!`);

}
