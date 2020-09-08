/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

// variante 1
var x = Math.floor(Math.random()*(9999))+1;
var z= x.toString().length;
console.log(`Il numero ${x} è composto da ${z} cifre.`);

//variante 2
var n = Math.floor(Math.random()*(9999))+1);
if (n>= 1 && n<10) {
  console.log(`${n} ha 1 cifra.`);
}
else if (n>=10 && n<100) {
  console.log(`${n} ha 2 cifre.`);
}
else if (n>=100 && n<1000) {
  console.log(`${n} ha 3 cifre.`);
}
else {
  console.log(`${n} ha 4 cifre.`);
}
