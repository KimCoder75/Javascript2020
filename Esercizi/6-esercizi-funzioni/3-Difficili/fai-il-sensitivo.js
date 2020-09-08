/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B

  Variante:
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti:
  vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.

  Consigli per la variante:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Se non ricordi come richiedere all'utente un valore in input, rivedi l'esercizio sugli array "Azzecca e azzera"

  http://www.imparareaprogrammare.it
*/
var check;
const n = prompt("Inserisci un numero n");
const a = prompt("Inserisci un numero a");
const b = prompt("Inserisci un numero b");
function calcolaLaDistanza(n,a,b){

if (Math.abs(n-a)!=Math.abs(n-b)) {
(Math.abs(n-a)>Math.abs(n-b))?check=1:check=-1;
}
else {
  check =0;
}
return check;
                                  }
console.log(calcolaLaDistanza(n,a,b));
