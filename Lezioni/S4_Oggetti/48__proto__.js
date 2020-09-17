/* array.__proto__ = Object.getPrototypeOf(array)*/
/*
CATENA DEI PROTOTIPI
null
Object.prototype
oggetti creati
*/

let obj ={}; //new Object();
console.log(obj.__proto__ == Object.prototype);

function Ferrari(){
}
Ferrari.prototype.marchio = `\u{00A9} Ferrari`;
let ferrari_458 = new Ferrari();
ferrari_458.cilindrata=1600;
let ferrari_458speciale = Object.create(ferrari_458);
console.log(Ferrari);
console.log(ferrari_458)
console.log(ferrari_458.__proto__== Ferrari.prototype);
console.log(ferrari_458speciale)
console.log(ferrari_458speciale.__proto__== ferrari_458);



//console.log(ferrari_458_speciale.__proto__);
console.log(ferrari_458_speciale.__proto__.__proto__==Ferrari.prototype);
console.log(ferrari_458_speciale.__proto__.__proto__.__proto__);
console.log(ferrari_458_speciale.__proto__.__proto__.__proto__.__proto__);

function Utente(nome,altezza){
  this.nome=nome;
  this.altezza=altezza;
  this.pesoIdeale = `Il peso ideale di ${nome} è ${(altezza - 100 * 0.95)} Kg.`;
}
Utente.prototype.type = "Utente Standard";
let utente1 = new Utente("Simone",175);
console.log(utente1.pesoIdeale);
console.log("La catena dei prototipi è la seguente:");
console.log(utente1.__proto__);
console.log(utente1.__proto__.__proto__);
console.log(utente1.__proto__.__proto__.__proto__);
let utente2 = new Utente("Marco",180);
console.log(utente2.pesoIdeale);
utente2.type="Super User";
console.log(utente1.type);
console.log(utente1);
console.log(utente2.type);
console.log(utente2);
console.log(utente2.__proto__);
//stare attenti a maiuscole e minuscole.
