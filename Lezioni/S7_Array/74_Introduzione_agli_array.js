let auto =[
    "Fiat 500",
    "Lancia Ypsinlon",
    "BMW X1"
];
console.log(auto[0],auto[1],auto[2]);

//ciclo for of
for (let modello of auto) {
  console.log(modello);
}

//l'array è un oggetto a cui si possono aggiungere propietà
auto.descrizione= "Collezione di auto"
console.log(auto.descrizione);
console.dir(auto);

//L'array puo' definirsi come un oggetto

let a = new Array(10,20,30);
a.concessionaria="Kimauto"
console.dir(a);
console.log(Object.getPrototypeOf(a) == Array.prototype);
console.dir(Array);
console.log(a.__proto__);

console.log(__proto__);
