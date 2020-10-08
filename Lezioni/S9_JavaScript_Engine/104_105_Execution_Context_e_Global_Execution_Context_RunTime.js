/*
* Nella creation phase viene creato l'oggetto window
creato this come riferimento a window
vengono inserite in memoria le funzioni
vengono create le variabili tramite la keyword var
ma non assegnati i valori

* Nella execution fase viene eseguito il codice riga per riga
vengono asseganti i valori alle variabili
vengono eseguite le funzioni

* l'assegnazione dei valori avviene nell'execution phase non nella creation fase,
 nella creation phase vengono solo create le variabili ma senza assegnamento,
 mentre le funzioni vengono inserite subito in memoria

le funzioni sono metodi dell'oggetto window?
le variabili sono proprietà dell'oggetto window?

*/





// console.log(window);
// console.log(this);
// console.log(a);
// console.log(a1);
// console.log(a2);
console.log(a,a1);

var a=10;
var a1=15;

function a11(){
  console.log('Ciao');
}
const a111 = function(){
  console.log('Ciao');
}
//con let e const non avviene hoisting
function a12(){
  console.log(arguments);
}
//execution fase
a12(12,23,56);

function a13(){
  function a13b(){
    console.log('Ciao');
  }
}
console.log(window);
