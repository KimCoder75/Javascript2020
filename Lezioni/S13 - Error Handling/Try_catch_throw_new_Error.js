/*jshint -W030,-W033,-W119,-W104*/
/*jshint expr:true*/
/*
* Gestione delle eccezioni
* la gestione dell'errore avviene solo per errori nella fase di runtime
* non nella fase di compilazione
* IN SINTESI:
* All'interno di try si inserisce il codice che può generare degli errori
* All'interno di catch si definisce come gestire l'errore
* Se l'errore è gestito, il codice non si blocca
* in caso di errore la constructor function ReferenceError crea un oggetto con tre proprietà:
* message, name e stack
* ed altre proprietà:
* lineNumber, columnNumber, fileName
* per sollevare un'eccezione si inserisce all'interno del try,
* throw new Error,
* creando una nuova istanza di Error
*/



let message = document.getElementById('main-Wrapper');

try {
  let numero = ~~(Math.random()*11);
  console.log(numero);
  if(numero==6 || numero==9){
    numero = undefined;
  }
  funzione1(numero);
}
catch (e) {
  message.textContent = e.message;
  }


function funzione1(numero){
  if (20/numero) {
    message.textContent= (`20/${numero} vale ${(20/numero).toFixed(2)}`);
  }
  else {
    throw new Error(`Il risultato non è un numero!`);
  }
}
