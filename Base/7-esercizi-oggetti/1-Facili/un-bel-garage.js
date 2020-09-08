/*
  Un bel garage
  Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Consigli:
  Puoi usare un array come base per salvare le automobili.

  http://www.imparareaprogrammare.it
*/
'use strict'
function Automobili(marca,modello){
  this.marca = marca;
  this.modello = modello;
//  this.descrizione = ()=>`Marca: ${this.marca}, Modello:${this.modello}`
}
let auto1 = new Automobili("Fiat","Punto");
let auto2 = new Automobili("Kia","Ceed");
let auto3 = new Automobili("Ford","Fiesta");
let auto4 = new Automobili("Citroen","C3");

for (var value in Automobili) {
  console.log(value.marca, value.modello);
}

console.log(
auto1.marca,auto1.modello,
auto2.marca,auto2.modello,
auto3.marca,auto2.modello,
auto4.marca,auto2.modello

);





// let automobile={
// marca:"Marca",
// modello:"Modello"
// }
// const auto=[
// auto1.automobile.marca="Fiat",
// auto2.automobile.marca="Kia",
// auto3.automobile.marca="Ford",
// auto4.automobile.marca="Citroen"];
//
// const modelli=[
// auto1.automobile.modello="Punto",
// auto2.automobile.modello="Ceed",
// auto3.automobile.modello="Fiesta",
// auto4.automobile.modello="C3"];
//
// for (var variable in automobile) {
//   console.log(variable);
// }




// // const marche = ["Fiat","Maserati","Lamborghini","Ferrari"]
// for (var i = 0; i < marche.length; i++) {
//   automobile.marca=marche[i]
//   automobile.marca;
//   console.log(automobile.marca);
// }
