/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/
var a = 5, b = 6, sm;
var lista =['somma','sottrazione','moltiplicazione','divisione','modulo','potenza','media']
var op = lista[Math.floor(Math.random()*(8))+1];
console.log(`Operazione: ${op}`);
switch (op) {
  case 'somma':
  sm=a+b;
  console.log(`${a} + ${b} = ${sm}`);
  break;
  case 'sottrazione':
  sm=a-b;
  console.log(`${a} - ${b} = ${sm}`);
  break;
  case 'moltiplicazione':
  sm=a*b;
  console.log(`${a} x ${b} = ${sm}`);
  break;
  case 'divisione':
  sm=a/b;
  console.log(`${a} : ${b} = ${sm}`);
  break;
  case 'modulo':
  sm=a%b;
  console.log(`${a} : ${b} = ${parseInt(a/b)} con il resto di ${sm}`);
  break;
  case 'potenza':
  sm=a**b;
  console.log(`${a} alla ${b}a = ${sm}`);
  break;
  case 'media':
  sm=((a+b)/2);
  console.log(`La media di ${a} e ${b} è ${sm}`);
  break;
  default:
  console.log(`Non è possibile eseguire operazioni tra ${a} e ${b}!`);
}
