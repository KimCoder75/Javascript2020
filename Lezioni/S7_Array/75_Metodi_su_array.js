/*
push - aggiunge all'ultimo indice
unshift - aggiunge al primo indice
pop - toglie dall'ultimo indice
shift - toglie dal primo indice
forEach - ciclo indice valore array
indexOf - la prima occorrenza
lastIndexOf - l'ultima occorrenza
*/
let auto =[
    "Fiat 500",
    "C3",
    "Lancia Ypsinlon",
    "C3",
    "BMW X1",
    "C3",
    "C4"
];
// console.dir(Array.prototype);
console.dir(auto);
console.table(auto);
//Metodo push - aggiunge all'ultimo indice
auto.push("Ferrari_458");
console.table(auto);
//Metodo unshift - aggiunge al primo indice
auto.unshift("Mercedes Classe A");
console.table(auto);
//Metodo pop - toglie dall'ultimo indice
let rimosso= auto.pop()
console.log(rimosso);
console.table(auto);
//Metodo shift - toglie dal primo indice
auto.shift();
console.table(auto);
//Metodo forEach - ciclo indice valore array
auto.forEach((item, i, array) => console.log(i, item, array));
//Metodo indexOf - la prima occorrenza
console.log(auto.indexOf("C3"));
//Metodo lastIndexOf - l'ultima occorrenza
console.log(auto.lastIndexOf("C3"));
