// /* creare una funzione che prenda in input gli argomenti forniti e li divida in base agli indici pari e dispari creando due array specifiche */

let listaPari= [];
let listaDispari = [];

function smistaLaLista(){
for (var index in arguments) {
console.log(arguments[index]);
(index %2 == 0) ? listaPari.push(arguments[index]) : listaDispari.push(arguments[index])
}
console.log(arguments);
}

smistaLaLista("17 09 20 15","Camilla","14 03 20 14","Rebecca","25 10 20 07","Matteo","18 10 19 81","Erika","21 09 19 75","Kim");
console.log(listaPari);
console.log(listaDispari);

for (var value of listaPari) {
  console.log(value); // mostra i valori

}

for (var value in listaDispari) {
  console.log(value); //mostra gli indici

}
