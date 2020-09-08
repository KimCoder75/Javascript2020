/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input:
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/
var NxM =  [[1, 2],[3, 4],[5, 6]];
var MxN = [];
for (var i = 0; i < 2; i++) {
  var EmptyArray = [];
    k=i;
    MxN.push(EmptyArray);
for (var i2 = 0; i2 < 3; i2++) {
var val=NxM[i2][k]
MxN[k][i2]=val;
}
}
console.clear();
console.log("Matrice Originale:");
console.table(NxM);
console.log("Matrice trasposta:");
console.table(MxN);
