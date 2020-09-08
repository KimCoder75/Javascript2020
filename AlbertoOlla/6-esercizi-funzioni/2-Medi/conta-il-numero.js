/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre


  http://www.imparareaprogrammare.it
*/

var numeroS = prompt("Inserisci un numero, io ne conterò le cifre","123456789")
console.clear();
function contaCifre(numero) {

var res=`il numero ${numeroS} è composto da ${numeroS.length} cifre.`
return res
                            }
console.log(contaCifre(numeroS));
