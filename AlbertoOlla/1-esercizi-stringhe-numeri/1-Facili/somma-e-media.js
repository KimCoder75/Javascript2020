/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3

  http://www.imparareaprogrammare.it
*/

const a = 1, b = 2, c = 3, d = 4, e = 5;
const sum=(a+b+c+d+e);
const med=(sum/5)
console.log(`la somma è:${sum}, la media è:${med}`);

const arr=[1,2,3,4,5];
var somma=0;
for (var i = 0; i < arr.length; i++) {
  somma+=arr[i];
  var media=(somma/(arr.length));
}
console.log(`la somma è:${somma}, la media è:${media}`);
