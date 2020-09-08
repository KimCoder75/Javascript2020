/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]
        somma = 212

  http://www.imparareaprogrammare.it
*/
var N=3, M=6;
var matrix=[];
var count=0;
for (var i = 0; i < N; i++) {
  k=i;
  var EmptyArray=[];
  matrix.push(EmptyArray);
  for (var i1 = 0; i1 < M; i1++) {
    var rnd=Math.floor(Math.random() * (100))+1; //Math.floor(Math.random() * (max - min + 1)) + min; Il max è incluso e il min è incluso
    matrix[k][i1]=rnd;
    count+=rnd;
  }
}
console.clear();
console.log(`Ecco la matrice ${N} x ${M} generata con numeri pseudo casuali da 1 a 100: `);
console.table(matrix);
console.log(`La somma degli elementi delle ${N} array è: ${count}`);
