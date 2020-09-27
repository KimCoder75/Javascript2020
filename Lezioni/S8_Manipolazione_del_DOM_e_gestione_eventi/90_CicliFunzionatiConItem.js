let blocchi = document.getElementById('ElencoBlocchi'),
    nodiElemento = blocchi.childNodes,
    nodiFiglio = blocchi.children;

console.log("\nCiclo for, utilizzo di item su children");
for (let i = 0; i < nodiFiglio.length; i++) {
  console.log(nodiFiglio.item(i));
};

// K: si può utilizzare for..in circoscrivendo solo le proprietà enumenrabili numeriche

console.log("\nKim: Ciclo for...in, utilizzo di item su children");
for (let i in nodiFiglio) {
  if (i/i==1 || i == 0) { //circoscrivo le proprietà enumerabili numeriche
  console.log(nodiFiglio.item(i));
  }
};

console.log("\nCiclo for, utilizzo di item su childNodes");
for (let i = 0; i < nodiElemento.length; i++) {
  console.log(nodiElemento.item(i));
};

console.log("\nKim: Ciclo for...in, utilizzo di item su childNodes");
for (let i in nodiElemento) {
  if (i/i==1 || i == 0) { //circoscrivo le proprietà enumerabili numeriche
  console.log(nodiElemento.item(i));
}
};




/*

Il for..in itera sulle proprietà enumerabili proprie ed ereditate dell'oggetto:

console.log("Ciclo for in, utilizzo di item su childNodes");
for (let index in nodiElemento) {
    console.log(index);
};
Se esegui questo codice vedrai che index non è un indice che puoi utilizzare con
il metodo item(), ma contiene di volta in volta una proprietà.

console.log("Ciclo for...in, utilizzo di item su children");

for (let index in nodiFiglio) {
console.log(nodiFiglio.item(index));
};

console.log("\nGianluca: Ciclo for...in, utilizzo di item su childNodes:");
for (let index in nodiElemento) {
    console.log(index);
};

console.log("\nGianluca: Ciclo for...in, utilizzo di item su children:");
for (let index in nodiFiglio) {
    console.log(index);
};
*/

//non funzionanti

// console.log("Ciclo forEach su children");
// nodiFiglio.forEach((item, i) => {
//   console.log(item(i));
// });

// for (let nome of nodiFiglio) {
//   console.log(nodiFiglio.item(i));
// }
