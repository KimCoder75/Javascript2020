/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/
// variante 1
var li='';
var x=5;
for (var i = 0; i < 11; i++) {
var t=x*i;
li+=`${t} `;
}
console.log(`${li}`);

// variante 2
var x =prompt('Inserire un numero:');
var xn=parseInt(x);
var li='';
for (var i = 0; i < 11; i++) {
var t=xn*i;
li+=`${t} `;
}
console.log(`${li}`);
