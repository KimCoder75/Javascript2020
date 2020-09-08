/* creare una costructor function
che crei un oggetto Macchina con 4 proprietà:
marca, modello e colore
ed una proprietà che usando un'arrow function descriva la macchina
Creare 2 oggetti macchina che diano in output la propria descizione.
Creare 1 oggetto macchina che appartenga ad un altro gruppo automotive.
Visualizzare il percorso assoluto del file html che richiama lo script
*/
function Macchina(marca, modello, colore){
this.marca=marca;
this.modello=modello;
this.colore=colore;
this.gruppo="FCA";
this.descrizione = () =>`${this.marca} ${this.modello} ${this.colore}, Gruppo: ${this.gruppo} `;
}

let macchina1 = new Macchina("Ferrari","F40","rossa")
console.log(macchina1.descrizione());

let macchina2 = new Macchina("Fiat","Punto","blu")

console.log(macchina2.descrizione());

let macchina3 = new Macchina("Kia","ceed","grigia")
macchina3.gruppo="HKA";
console.log(macchina3.descrizione());

console.log(macchina1);
console.log(macchina2);
console.log(macchina3);
console.log(window.location.href);
