/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/
//30/07/2020
//Math.floor(Math.random() * (max - min + 1)) + min; Il max è incluso e il min è incluso
var a=(Math.floor(Math.random() * (10 -(- 10) + 1)) +(-10));
var b=(Math.floor(Math.random() * (10 -(- 10) + 1)) +(-10));
var c=(Math.floor(Math.random() * (10 -(- 10) + 1)) +(-10));

function maggiore(a,b,c) {

if (a>b) {
  var d=a;
}
else {
  var d=b;
}
if (d>c) {
  console.log(`il numero maggiore è ${d}`);
}
else {
  console.log(`il numero maggiore è ${c}`);
}
}

function minore(a,b,c) {

if (a<b) {
  var d=a;
}
else {
  var d=b;
}
if (d<c) {
  console.log(`il numero minore è ${d}`);
}
else {
  console.log(`il numero minore è ${c}`);
}
}

console.clear();
console.log(`a: ${a}, b: ${b}, c: ${c},`);
maggiore(a,b,c);
minore(a,b,c);

// 03/08/2020 variante con Array


var n=[]; //crea una lista vuota
console.clear();
// definisci l
var lS=prompt("Di quanti numeri vuoi che sia fatta l'array?","Inserisci un numero");
var l= parseInt(lS);

function generaArray(lista,lunghezza){
          //popola la lista eseguendo un ciclo che va da 0 a l
          for (var i = 0; i < l; i++){
          //Math.floor(Math.random() * (max - min + 1)) + min; // max e min sono inclusi
          var rdn=Math.floor(Math.random()*(300)+1) // genera un numero pseudo random da 1 a 300 inclusi.
          var push = n.push(rdn); // aggiungi il numero alla lista
                                     }

                                  }
generaArray(n,l);

console.log(`Ecco la lista dei numeri:`); //mostra la lista creata.
console.log(n);

function ordina(lista, lunghezza){
          var j;
          var cx=0;
          //esegue un ciclo da 0 a l-1
          for (var r = 0; r < (l-1); r++){
              cx+=1; // ad ogni iterazione aumenta cx di 1 in modo da evitare doppi confronti.
              for (var c = cx; c < l; c++){//esegue un ciclo che va da cx al numero di elementi scelti dall'utente

                //qui c'è il vero e proprio nucleo che ordina la lista in maniera crescente.
                if (n[r]>n[c]){   // se il numero all'indice n è maggiore del numero all'indice c, invertili
                  j=n[r];          // copia n[r] in j
                  n[r]=n[c];      // copia n[c] in n[r]
                  n[c]=j;          // copia j in n[c]
                              }
                                          }
                                          }
                                                  }
ordina(n,l);

console.log(`Il numero minore è: ${n[0]}, il maggiore è: ${n[l-1]}`); // prende il primo e l'ultimo elemento della lista ordinata.
