/* creare una costructor function
che crei un oggetto Macchina con 4 proprietà:
marca, modello e colore
ed una proprietà che usando un'arrow function descriva la macchina
creare 2 oggetti macchina che diano in output la propria descizione.
*/
function Macchina(marca, modello, colore){
this.marca=marca;
this.modello=modello;
this.colore=colore;
this.descrizione = () =>`La mia marca è ${this.marca}, il mio modello è ${this.modello}, il mio colore è ${this.colore}, ${this.gruppo} `;
}
Macchina.prototype.gruppo = "faccio parte del gruppo FCA";

let macchina1 = new Macchina("Ferrari","F40","Rosso")
console.log(macchina1);
console.log(macchina1.descrizione());

let macchina2 = new Macchina("Fiat","Punto","Blu")
console.log(macchina2);
console.log(macchina2.descrizione()); // errore verificare
console.log(macchina2.__proto__);
