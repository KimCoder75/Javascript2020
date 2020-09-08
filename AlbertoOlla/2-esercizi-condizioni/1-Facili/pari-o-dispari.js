/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.

  Esempi:
    Input: numero = 63
    Output: 1

    Input: numero = 24
    Output: 0

  Consigli:
  Per capire se un numero è pari o dispari puoi usare un operatore, ma quale? :)
  (Se non ti ricordi riguarda la lezione "Come dichiarare e definire le variabili e i tipi di dato" oppure "Il tipo Numero e gli operatori aritmetici")

  http://www.imparareaprogrammare.it
*/
var snum =prompt('Inserire un numero:');
var num=parseInt(snum);
console.log(`Numero inserito: ${num}`);
if (num%2==0) {
console.log(`${num} è pari, quindi il valore richiesto è 0`);
  // alert(`${num} è pari, quindi il valore richiesto è 0`);
}
else {
console.log(`${num} è dispari, quindi il valore richiesto è 1`);
  // alert(`${num} è dispari, quindi il valore richiesto è 1`);

}
