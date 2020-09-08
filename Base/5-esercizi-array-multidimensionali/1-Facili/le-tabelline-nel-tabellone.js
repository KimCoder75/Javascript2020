/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100

  http://www.imparareaprogrammare.it
*/

/*versione 1 */
var symbol=(" | ");
var base=[0,1,2,3,4,5,6,7,8,9,10];
console.clear();
for (var i = 1; i < 11; i++) {
var tab=[];
var x=i;
for (var r = 1; r < 11; r++) {
  var z=base[r];
  var so=x*z;
//Per rappresentare il risultato ho scelto di convertire i numeri in strighe
  var sotxt=so.toString();
/* visto che i numeri variano da una a tre cifre (da 1 a 100), appena in una riga avviene il cambiamento tra una e due cifre si spagina tutto.
Non esistendo delle vere e proprie colonne, la rappresentazione visiva del tabellone risulta molto disordinata.
Per avere un risultato visivamente ordinato ho introdotto un criterio che porta tutti i numeri a due cifre.
Quando il numero è ad una cifra (so < 10), aggiungi uno spazio prima del numero.
*/
if (so<10) {
sotxt=" "+so
}
tab.push(sotxt)
}
// trasformo il contenuto dell'array in una stringa concatenata con il simbolo " | "
var lon=tab.join(symbol)
console.log(lon);
}

// aggiungere intestazione, colonna numeri e riga x
/* versione 2 */
var N=11, M=11;
var matrix=[];
for (var i = 0; i < N; i++) {
var EmptyArray = [];
  k=i;
  matrix.push(EmptyArray);
  for (var i1 = 0; i1 < M; i1++) {
    var num=k*i1;
    matrix[k][i1]=(num)
  }
}
console.clear();
console.log("Ecco il tabellone delle tabelline:");
console.table(matrix);
