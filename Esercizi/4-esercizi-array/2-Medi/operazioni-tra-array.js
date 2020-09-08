/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/
var lista1 =[];
var lista2 =[];
var listaSum=[];
var listaSub=[];
var listaMult=[];
var listaDiv=[];
var listaMod=[];
var limit=10;
var rnd1;
var rnd2;
for (var i = 0; i < limit; i++) {

//Attenzione
//Math.floor(Math.random()* (max-min)+min); Il max è escluso e il min è incluso
//Math.floor(Math.random() * (max - min + 1)) + min; Il max è incluso e il min è incluso
  rnd1= Math.floor(Math.random()*(10))+1; //valori con estremi inclusi
  rnd2= Math.floor(Math.random()*(10))+1;

  let sum=rnd1+rnd2;
  let sub=rnd1-rnd2;
  let mult=rnd1*rnd2;
  let div=rnd1/rnd2
  let mod=rnd1%rnd2

  lista1.push(rnd1);
  lista2.push(rnd2);
  listaSum.push(sum);
  listaSub.push(sub);
  listaMult.push(mult);
  listaDiv.push(div);
  listaMod.push(mod);

}
console.clear();
console.log("La prima lista generata è la seguente:");
console.log(lista1);
console.log("La seconda lista generata è la seguente:");
console.log(lista2);
console.log("La lista dei numeri sommati è la seguente:");
console.log(listaSum);
console.log("La lista dei numeri sottratti è la seguente:");
console.log(listaSub);
console.log("La lista dei numeri moltiplicati è la seguente:");
console.log(listaMult);
console.log("La lista dei numeri divisi è la seguente:");
console.log(listaDiv);
console.log("La lista dei resti della divisione tra i numeri è la seguente:");
console.log(listaMod);
