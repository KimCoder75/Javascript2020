/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
//Memo
//Math.floor(Math.random()* (max-min)+min); Il max è escluso e il min è incluso
var multiMatrix = [];
for (var i = 0; i < 10; i++) {
  var k=i;
  var EmptyArray = [];
  multiMatrix.push(EmptyArray);
for (var i2 = 0; i2 < 10; i2++) {
var rnd=Math.floor(Math.random() * (101)); //Math.floor(Math.random() * (max - min + 1)) + min; Il max è incluso e il min è incluso
multiMatrix[k][i2]=rnd
}
}
console.clear();
console.table(multiMatrix);
