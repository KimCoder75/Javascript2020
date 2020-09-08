/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e i due array.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]

        array R = [152, 61]
        array C = [2, 70, 140]

  http://www.imparareaprogrammare.it
*/

var N=3, M=4;
var matrix=[],R=[],C=[];
for (var i = 0; i < N; i++) {
  var k=i;
  var EmptyArray=[];
  var countRow=0;
  matrix.push(EmptyArray);
for (var i1 = 0; i1 < M; i1++) {
  var rnd=Math.floor(Math.random() * (100))+1; //Math.floor(Math.random() * (max - min + 1)) + min; Il max è incluso e il min è incluso
  matrix[k][i1]=rnd;
  countRow+=rnd;
}
R.push(countRow);
}
console.clear();
console.table(matrix);
for (var i = 0; i < M; i++) {
var k=i;
var countCol=0;
for (var i1 = 0; i1 < N; i1++) {
var num=matrix[i1][k];
countCol+=num;
}
C.push(countCol);
}
console.log("La somma delle colonne è:");
console.table(C);
console.log("La somma delle righe è:");
console.table(R);
