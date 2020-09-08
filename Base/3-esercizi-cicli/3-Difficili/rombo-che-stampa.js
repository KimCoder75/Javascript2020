/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.

  http://www.imparareaprogrammare.it
*/


// Variante 1

for (var i = 1; i < 8; i++) {

switch (i) {
  case 1: // riga 1
  case 7: // riga 7
  console.log('   X');
  break;

  case 2:// riga 2
  case 6:// riga 6
  console.log('  XXX');
  break;

  case 3:// riga 3
  case 5:// riga 5
  console.log(' XXXXX');
  break;

  case 4:// riga 4
  console.log('XXXXXXX');
  break;
          }

}

// Variante 2
var x='XXXXXXX'; // crea una stringa con 7 X
// il nomero di spazi deve essere X stringa/2 arrotondato per difetto
var ta='   ';// crea una stringa con 3 spazi bianchi

for (var i = 1; i < x.length+1; i++) { // inizia un ciclo da 1 a 7
    if (i%2!=0) { // se i è dispari
var y=x.slice(0,i); // crea una stringa di lunghezza variabile che inizia dalla posizione 0 e arriva a i
// lunghezza spazio= (Lunghezza stringa X - lunghezza stringa Y)/2
var sp=((x.length-y.length)/2)
//caso 1 (7-1)/2 = 3 spazi
//caso 3 (7-3)/2 = 2 spazi
//caso 5 (7-5)/2 = 1 spazi
//caso 7 (7-7)/2 = 0 spazi
var pos=ta.slice(0,sp) // crea una variabile pos di lunghezza variabile chi inizia dalla posizione 0 e arriva a sp
console.log(`${pos}${y}`); // mostra pos e y in modo da creare un'indentatura corretta
    }
}
for (var ir = x.length-2; ir > 0; ir--) { // inizia un ciclo da 5 a 1 a ritroso
    if (ir%2!=0) { // se ir è dispari
var yr=x.slice(0,ir); // crea una stringa di lunghezza variabile che inizia dalla posizione 0 e arriva a i
var spr=((x.length-yr.length)/2) // crea una variabile spazio
// lunghezza spazio= (Lunghezza stringa X - lunghezza stringa Yr)/2
//caso 7 (7-7)/2 = 0 spazi
//caso 5 (7-5)/2 = 1 spazi
//caso 3 (7-3)/2 = 2 spazi
//caso 1 (7-1)/2 = 3 spazi
var pos=ta.slice(0,spr) // crea una variabile pos di lunghezza variabile chi inizia dalla posizione 0 e arriva a sp
console.log(`${pos}${yr}`); // mostra pos e y in modo da creare un'indentatura corretta
    }
}
