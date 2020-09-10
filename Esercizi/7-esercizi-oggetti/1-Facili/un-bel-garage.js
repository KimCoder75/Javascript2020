/*
  Un bel garage
  Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Consigli:
  Puoi usare un array come base per salvare le automobili.

  http://www.imparareaprogrammare.it
*/
// 'use strict'

function Automobili(marca,modello){
  this.marca = marca;
  this.modello = modello;
  //#this.descrizione = ()=>`Marca: ${this.marca}, Modello: ${this.modello}`
}
let auto1 = new Automobili("Fiat","Punto");
let auto2 = new Automobili("Kia","Ceed");
let auto3 = new Automobili("Ford","Fiesta");
let auto4 = new Automobili("Citroen","C3");
let auto5 = new Automobili("Fiat","Tipo");
let auto6 = new Automobili("Fiat","Panda");
let lista =[auto1,auto2,auto3,auto4,auto5,auto6];
// trovare un modo per estrarre le Marche
console.table(lista);
