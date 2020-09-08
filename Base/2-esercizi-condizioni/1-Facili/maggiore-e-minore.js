/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2


  http://www.imparareaprogrammare.it
*/

/* variante 1 */
//definisco le variabili.
var x1=5,x2=7,x3=9;
console.log(`Numeri iniziali: ${x1},${x2},${x3}`);

// Se x1 > x2, scambia i numeri passando attraverso un variabile di appoggio y
if (x1 < x2) {
    y = x2;   // copia x2 in y
    x2 = x1;  // copia x1 in x2
    x1 = y;   // copia y in x1
             }
// Se x1 > x3, scambia i numeri passando attraverso un variabile di appoggio y
if (x1 < x3) {
    y = x3;   // copia x3 in y
    x3 = x1;  // copia x1 in x3
    x1 = y;   // copia y in x1
             }
// Se x2 > x3, scambia i numeri passando attraverso un variabile di appoggio y
if (x2 < x3) {
    y = x3;   // copia x3 in y
    x3 = x2;  // copia x2 in x3
    x2 = y;   // copia y in x2
             }
// altrimenti, lascia tutto com'è (in questo caso è else è superfluo.

console.log(`Numeri finali: ${x1},${x2},${x3}`);

/* variante 2 */

var a=3,b=-1,c=4,d=-2;
var max=(Math.max(a,b,c,d));
var min=(Math.min(a,b,c,d));
console.log(`Tra i numeri: ${a}, ${b}, ${c} e ${d}, il minore è ${min}`);
console.log(`Tra i numeri: ${a}, ${b}, ${c} e ${d}, il maggiore è ${max}`);

/* variante 3 */

var n=[15,67,63,37,56,77];
var j;
var l=n.length
var cx=0
console.log(`la lista è ${n}`);
for (var r = 0; r < (l-1); r++){
  cx+=1;
  for (var c = cx; c < l; c++) {
    if (n[r]<n[c]) {

      j=n[r];     // copia n[r] in j
      n[r]=n[c];  // copia n[c] in n[r]
      n[c]=j;     // copia j in n[c]
                   }
                                }
                                }
console.log(`la lista ordinata in ordine decrescente è ${n}`);

/* variante 4 */

var n=[]; //crea una lista vuota
var j;//
var cx=0
console.clear();

// definisci l
var l=prompt('Di quanti numeri vuoi che sia composta la lista?','Inserisci un numero');

//popola la lista eseguendo un ciclo che va da 0 a l
for (var i = 0; i < l; i++){

var rdn=Math.floor(Math.random()*(99))+1 // genera un numero pseudo random da 1 a 99 inclusi.
var push = n.push(rdn); // aggiungi il numero alla lista

                           }
console.log(`Ecco la tua lista:`); //mostra la lista creata.
console.log(n);
console.log(`Che casotto! Meglio metterla in ordine decrescente.`);

//esegue un ciclo da 0 a l-1
for (var r = 0; r < (l-1); r++){
    cx+=1; // ad ogni iterazione aumenta cx di 1 in modo da evitare doppi confronti.
    for (var c = cx; c < l; c++){//esegue un ciclo che va da cx al numero di elementi scelti dall'utente

      //qui c'è il vero e proprio nucleo.
      if (n[r]<n[c]){ // se il numero all'indice n è minore del numero all'indice c, invertili
        j=n[r];     // copia n[r] in j
        n[r]=n[c];  // copia n[c] in n[r]
        n[c]=j;     // copia j in n[c]
                    }
                                }
                                }
console.log(`Ecco fatto:`); // mostra la lista creata
console.log(n);
