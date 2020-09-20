/*
Creare un array che contenga i primi 15 numeri della serie di Fibonacci
ed abbia due proprietà la prima dia la definizione di serie di Fibonacci,
la seconda descriva il contenuto dell'Array.

Definizione:
La Serie di Fibonacci è una successione di numeri interi i cui primi due
 elementi sono 1 e 1, e ciascun altro elemento è uguale alla somma dei due
 termini precedenti.

*/

let serieFibonacci = [1,1],
    fibAccumulatore;
for (let i = 0; i < 13; i++) {
  fibAccumulatore=serieFibonacci[i]+serieFibonacci[i+1];
  serieFibonacci.push(fibAccumulatore);
}
serieFibonacci.definizione = "La Serie di Fibonacci è una successione di numeri interi i cui primi due elementi sono 1 e 1, e ciascun altro elemento è uguale alla somma dei due termini precedenti."
serieFibonacci.descrContenuto = "Array contenente i primi 15 numeri della serie di Fibonacci"
console.log(serieFibonacci.definizione);
console.log(serieFibonacci);
console.log(serieFibonacci.descrContenuto);
//[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]
