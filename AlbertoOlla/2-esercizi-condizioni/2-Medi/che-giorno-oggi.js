/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1: a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: 'Sabato'

    Input: numero = 10
    Output: 'Errore! Giorno della settimana non valido!'

  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.

  http://www.imparareaprogrammare.it
*/
var ris;
Math.floor(Math.random()*(10))+1
var x=Math.floor(Math.random()*(10))+1
switch (x) {
  case 1:
  ris='lunedì';
  break;
  case 2:
  ris='martedì';
  break;
  case 3:
  ris='mercoledì';
  break;
  case 4:
  ris='giovedì';
  break;
  case 5:
  ris='venerdì';
  break;
  case 6:
  ris='sabato';
  break;
  case 7:
  ris='domenica';
  break;
  default:
  ris='Errore! Giorno della settimana non valido!';
}
console.log(`${x} ${ris}`)

var risM;
var y=Math.floor(Math.random()*(15))+1
switch (y) {
  case 1:
  risM='Gennaio';
  break;
  case 2:
  risM='Febbraio';
  break;
  case 3:
  risM='Marzo';
  break;
  case 4:
  risM='Aprile';
  break;
  case 5:
  risM='Maggio';
  break;
  case 6:
  risM='Giugno';
  break;
  case 7:
  risM='Luglio';
  break;
  case 8:
  risM='Agosto';
  break;
  case 9:
  risM='Settembre';
  break;
  case 10:
  risM='Ottobre';
  break;
  case 11:
  risM='Novembre';
  break;
  case 12:
  risM='Dicembre';
  break;
  default:
  risM='Errore! Mese non valido!';
}
console.log(`${y} ${risM}`)
