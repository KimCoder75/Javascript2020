/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/
var tot=prompt('Quanti valori vuoi nell\'array?','inserisci un numero');
var max=prompt('Quale valore scegli come valore massimo?','inserisci il valore massimo');
var min=prompt('Quale valore scegli come valore minimo?','inserisci il valore minimo');

if (max<min || max==min) {
  alert('Il massimo deve essere maggiore del minimo!');
  max=prompt('Quale valore scegli come valore massimo?','inserisci il valore massimo');
  min=prompt('Quale valore scegli come valore minimo?','inserisci il valore minimo');
}

console.clear();
const nTot=parseInt(tot);
const nMax=parseInt(max);
const nMin=parseInt(min);
var lista=[];
var maggiori=[];
var minori=[];
var sommaN=0;
var media;

for (var i = 0; i < nTot; i++) {
  //Attenzione
  //Math.floor(Math.random()* (max-min)+min); Il max è escluso e il min è incluso
  //Math.floor(Math.random() * (max - min + 1)) + min; Il max è incluso e il min è incluso
  rnd=Math.floor(Math.random()*(nMax-nMin+1))+nMin; // genera un numero pseudo casuale che vada da nMin a nMax inclusi
  lista.push(rnd);
  sommaN+=rnd

}

media=(sommaN/nTot)


lista.forEach(SupInf)
function SupInf(value) {

      if (value>media) {

      maggiori.push(value);

      }

      else {

      minori.push(value);

      }

}

console.log(`La lista è formata da ${nTot} numeri che vanno da ${nMin} a ${nMax} ed è la seguente:`);
console.log(lista);
console.log(`La media dei numeri contenuti nella lista è: ${media}`);
console.log(`I numeri maggiori della media sono: ${maggiori.length} e sono i seguenti: ${maggiori}`);
console.log(`I numeri minori della media sono ${minori.length} e sono i seguenti: ${minori}`);
