/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/


// Utilizzato:
// Array ed il metodo push,
// Cicli: do while, for, forEach,
// Condizioni: if, else if, else, switch case,
// Avvisi output e input utente: alert, prompt,
// Comandi console: console.log, console.clear,
// Conversione in numeri: parseInt,
// Math con metodi random e floor,
// Operatori: di confronto e logici.



// dato un array di 100 elementi
// lo riempia con numeri interi casuali da 1 a 50
// Permetti all'utente di inserire un numero
// azzera tutti gli elementi nell'array principale che sono suoi multipli
// Richiedi all'utente un altro numero e così via
// Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.


// dato un array di 100 elementi

var lista=[]; // crea una lista vuota
// riempilo con numeri interi casuali da 1 a 50
var limite=101;
//somVal somma valori elementi
var somVal=0; //inizializzo somVal=0
var valuetemp=0;
var delta=0;
var sommadelta=0;
var count=0;
var somma;
var bar=0;
var nU1;
console.clear();
var name=prompt('Inserisci il tuo nome','Nome');

//popola la lista eseguendo un ciclo

for (var i = 1; i < limite; i++) {
var rdn=Math.floor(Math.random()*(51-1)+2) // genera un numero pseudo random da 2 a 50 (2 e 50 compresi)
var push =  lista.push(rdn); // aggiungi elemento generato alla lista
somVal+=rdn //aggiungi il numero generato a somVal
}
// console.log(somVal);
// Controllo esito lista e la mostro all'utente in console
// console.log(lista);// mostra lista originale
// console.log(somVal);// mostra somma valori



// creo un ciclo che continua finchè la somma dei valori degli elementi è maggiore di 0 e si interrompe quando è 0 o minore(in questo caso minore non è possibile)


do {
// Fai scegliere all'utente un numero da 1 a 50
count+=1
var nU=prompt('Il numero che inserirai insieme ai suoi multipli verranno cancellati','Inserisci un numero da 2 a 50');
nU1=parseInt(nU);
if (nU1===1) {
  bar=1;
      console.clear();
          switch (count) {
            case 1:
                alert(`${name}, Barare con la logica?\nBeh è anche questo un modo!\nChissà se è effettivamente divertente!\nHai risolto il problema in ${count} tentativo!`);
            break;

            default:
                alert(`${name}, Barare con la logica?\nBeh è anche questo un modo!\nChissà se è effettivamente divertente!\nHai risolto il problema in ${count} tentativi!`);
                        }

}

if ( (nU1!==1) && (nU1<2 || nU1>50) ) {
var nU=prompt('Il numero che hai inserito è fuori dall\'intervallo richiesto.','Inserisci un numero da 2 a 50');
nU1=parseInt(nU);
}

  console.clear();

// scorri tutti i numeri dell'array
// trova i multipli di nU
// sostituisci i multipli di nU con 0

lista.forEach(impostaA0);
function impostaA0(value, index, lista) {


  if (value%nU1===0 && value!==0) // se il valore è un multiplo del valore impostato dall'utente ed è diverso da zero

  {
    console.clear();
    // console.log(`valore: ${value}`);
    valuetemp=value; // copia il valare su valuetemp
    // console.log(`valore temp: ${valuetemp}`);
    lista[index]=0 //imposta il valore trovato a 0
    // console.log(`valore value (lista[index]dopo l'azzeramento: ${lista[index]}`);
    // console.log(lista);
    delta=valuetemp-(lista[index])//definici il delta tra valuetemp ed il valore scelto
    // console.log(`valore delta: ${delta}`);
    sommadelta+=delta// aggiungi delta alla somma dei delta
    // console.log(`valore somma delta: ${sommadelta}`);
    // console.log(`valore somVal: ${somVal}`);
    somma=somVal-sommadelta
    // console.log(`valore somma(somVal-sommadelta): ${somma}`);
    console.log(lista);
  }

}
console.log(`valore scelto: ${nU1}`);
} while (somma>0);

if (bar===0) {
  console.clear();
  alert(`Congratulazioni ${name}, hai finito!\nHai risolto il problema in ${count} tentativi!`);// mostra un avviso che hai completato il gioco
}
