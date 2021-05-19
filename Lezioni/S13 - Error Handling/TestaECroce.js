
var numeri = [[],[]];
var zero = [];
var uno = [];
var capInv = [];
var capitale = 10000;
var percentuale = 0.01;
var per = {
  uno: 0.01
};

for (var i = 0; i < 100; i++) {
  var numero = Math.round(Math.random());
  var puntata=capitale*percentuale;

  if (numero == 0) {
    zero.push(numero);
    numeri[0].push(numero);
    numeri[1].push(puntata);
    capitale = (capitale - puntata);
    capInv.push(puntata);
    puntata = capitale*0.01;
  }
  else {

    uno.push(numero);
    percentuale = per.uno;
    puntata=capitale*percentuale;
    numeri[0].push(numero);
    numeri[1].push(puntata);
    capitale = (capitale + puntata);
    // console.log(percentuale);
    per.uno = percentuale*1.1;
    capInv.push(puntata);
  }
}
console.log("Gli zero sono:",zero.length);
console.log("Gli uno sono:",uno.length);
console.log("Capitale Iniziale:",10000);
console.log("Capitale finale:", capitale);
console.log("Percentuale vincite:",uno.length,"%");
// console.log((Math.abs(10000-capitale))/10000*100);
// console.table(capInv);
// console.table(numeri);
/* Prima inv:
capitale * percentale
se numero è 0
aggiungi 0 alla lista
capitale = capitale - inv
percentuale = 0.01
altrimenti
aggiungi 1 alla lista
capitale = capitale + inv
percentuale = 0.02
*/
