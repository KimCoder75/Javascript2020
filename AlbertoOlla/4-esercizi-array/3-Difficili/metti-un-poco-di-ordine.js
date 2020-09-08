/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinarli in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/

/* variante 1 ordine decrescente*/

var n=[]; //crea una lista vuota
var j;//
var cx=0
console.clear();

// definisci l
var l=10;

//popola la lista eseguendo un ciclo che va da 0 a l
for (var i = 0; i < l; i++){

var rdn=Math.floor(Math.random()*(10)+1) // genera un numero pseudo random da 1 a 10 inclusi.
var push = n.push(rdn); // aggiungi il numero alla lista

                           }
console.log(`Ecco la lista:`); //mostra la lista creata.
console.log(n);

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
console.log(`Ecco la lista ordinata in ordine decrescente:`); // mostra la lista in ordine decrecente
console.log(n);

/* variante 2 ordine crescente*/

var n=[]; //crea una lista vuota
var j;//
var cx=0
console.clear();

// definisci l
var l=10;

//popola la lista eseguendo un ciclo che va da 0 a l
for (var i = 0; i < l; i++){

var rdn=Math.floor(Math.random()*(10)+1) // genera un numero pseudo random da 1 a 10 inclusi.
var push = n.push(rdn); // aggiungi il numero alla lista

                           }
console.log(`Ecco la lista:`); //mostra la lista creata.
console.log(n);

//esegue un ciclo da 0 a l-1
for (var r = 0; r < (l-1); r++){
    cx+=1; // ad ogni iterazione aumenta cx di 1 in modo da evitare doppi confronti.
    for (var c = cx; c < l; c++){//esegue un ciclo che va da cx al numero di elementi scelti dall'utente

      //qui c'è il vero e proprio nucleo.
      if (n[r]>n[c]){ // se il numero all'indice n è maggiore del numero all'indice c, invertili
        j=n[r];     // copia n[r] in j
        n[r]=n[c];  // copia n[c] in n[r]
        n[c]=j;     // copia j in n[c]
                    }
                                }
                                }
console.log(`Ecco la lista ordinata in ordine crescente:`); // mostra la lista in ordine crecente
console.log(n);
