/*

Creare un oggetto che contenga:
Un array contenente i primi 15 numeri della serie di Fibonacci
la definizione di serie di Fibonacci,
La descrizione del contenuto dell'Array.

Output:
La Serie di Fibonacci è una successione di numeri interi i cui primi due elementi sono 1 e 1, e ciascun altro elemento è uguale alla somma dei due termini precedenti.
Array contenente i primi 15 numeri della serie di Fibonacci
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]


*/
let accumulatore;
const fibonacci = {
    definizione: "La Serie di Fibonacci è una successione di numeri interi i cui primi due elementi sono 1 e 1, e ciascun altro elemento è uguale alla somma dei due termini precedenti.",
    descrContenuto: "Array contenente i primi 15 numeri della serie di Fibonacci",
    serie: [1,1]
};

for (let i = 0; i < 13; i++) {
  accumulatore = fibonacci.serie[i]+fibonacci.serie[i+1];
  fibonacci.serie.push(accumulatore);
}

console.log(fibonacci.definizione);
console.log(fibonacci.descrContenuto);
console.log(fibonacci.serie);
