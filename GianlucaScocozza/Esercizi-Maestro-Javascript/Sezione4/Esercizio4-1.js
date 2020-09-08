/* creare un oggetto letterale
che abbia marca e modello e colore
creare 2 oggetti che ereditino le proprietà dall'oggetto padre
e ne aggiungano altri

creare la stessa cosa con una costructor function
*/
let Ferrari= {
marca:"Ferrari",
modello:"F40",
colore:"bianco"
}
console.log(Ferrari);

let ferrari_458 = Object.create(Ferrari); // crea un oggetto ferrari_458 con ferrari come prototipo
ferrari_458.cilindrata = 2000;
ferrari_458.cavalli = 680;
ferrari_458.colore = "Rosso Opaco";
console.log(ferrari_458);
console.log(ferrari_458.marca);

//let ferrari_inventata = new Ferrari() // errore perchè ferrari non è una costructor function
let ferrari_inventata = Object.create(Ferrari);
ferrari_inventata.aspetto ="Figo";
ferrari_inventata.colore ="Verde Hulk";
console.log(ferrari_inventata);
console.log(ferrari_inventata.marca);
