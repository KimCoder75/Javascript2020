/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto con quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/


//--------------------------------------------------------------------------------------------
// Eseguite due varianti:

// Prima variante:
// Faccio scegliere all'utente la lunghezza della lista tramite prompt().
// Uso un ciclo for .
// Ad ogni iterazione aggiunge il numero casuale Math.floor(Math.random()) alla lista tramute il metodo push().
// Genero la lista inversa con il metodo reverse().

// Seconda variante:
// Al posto del metodo reverse(), ho utilizzato un ciclo for discendente per generare gli indici.
// Ad ogni iterazione aggiunge alla lista inversa l'elemento della lista originale con indice che parte dal massimo e arriva a zero.


// variante 1
console.clear();
var numPro=prompt('Inserisci un numero da 5 a 10:','Inserisci un numero da 5 a 10');
var proNum=parseInt(numPro);
var lista=[];
var listaRev=[]
var rnd;

//popola la lista di numeri casuali da 1 a 10
for (var i = 0; i < proNum+1; i++) {
  //Attenzione
  //Math.floor(Math.random()* (max-min)+min); Il max è escluso e il min è incluso
  //Math.floor(Math.random() * (max - min + 1)) + min; Il max è incluso e il min è incluso
  rnd=Math.floor(Math.random()*(10))+1; // genera un numero pseudo casuale che vada da 1 a 10 inclusi
  lista.push(rnd);

}

console.log(`Ecco la lista che si è generata:\n\[${lista}\]`);

//uso il metodo reverse per invertire la lista
listaRev = lista.reverse();
console.log(`La lista invertita è così:\n\[${listaRev}\]`);


// variante 2
console.clear();
var numPro=prompt('Inserisci un numero da 5 a 10:','Inserisci un numero da 5 a 10');
var proNum=parseInt(numPro);
var lista=[];
var listaRev=[]
var rnd;
// console.log('Hai scelto i seguenti numeri:');

//popola la lista di numeri casuali da 1 a 10
for (var i = 0; i < proNum; i++) {

  rnd=Math.floor(Math.random()*(10))+1; // genera un numero pseudo casuale che vada da 1 a 10 inclusi
  lista.push(rnd);

}

console.log(`Ecco la lista che si è generata:\n\[${lista}\]`);

// popolo la lista tramite un ciclo discendente che parte da proNum e arriva a 0
for (var h = proNum-1; h >= 0; h--) {

  listaRev.push(lista[h]); // aggiungi a listaRe l'elemento di lista con indice h

}

console.log(`La lista invertita è così:\n\[${listaRev}\]`);
