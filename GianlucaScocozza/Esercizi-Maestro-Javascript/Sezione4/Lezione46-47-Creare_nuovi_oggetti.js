//Catena dei prototipi
let ferrari = {
marchio:"Ferrari \u{1F3CE}",
dal: 1921,
colore: "rosso"
};

let ferrari_458 = Object.create(ferrari); // crea un oggetto ferrari_458 con ferrari come prototipo
ferrari_458.cilindrata = 2000;
ferrari_458.cavalli = 680;

let ferrari_458_special = Object.create(ferrari_458); // crea un oggetto ferrari_458_special con ferrari_458 come prototipo
// console.log(ferrari_458_special.toString);
let ogj ={};//new Object()
console.log(Object);
