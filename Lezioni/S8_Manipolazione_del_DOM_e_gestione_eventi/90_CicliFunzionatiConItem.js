
let blocchi = document.getElementById('ElencoBlocchi'),
    nodiElemento = blocchi.childNodes,
    nodiFiglio = blocchi.children;

// console.log("Ciclo For, utilizzo di item su childNodes");
// for (let i = 0; i < nodiElemento.length; i++) {
//   console.log(nodiElemento.item(i));
// };
//
// console.log("Ciclo For, utilizzo di item su children");
// for (let i = 0; i < nodiFiglio.length; i++) {
//   console.log(nodiFiglio.item(i));
// };

console.log("Ciclo for in, utilizzo di item su children");
for (let index in nodiFiglio) {
console.log(nodiFiglio.item(index));
};

console.log("Ciclo for in, utilizzo di item su childNodes");
for (let index in nodiElemento) {
console.log(nodiElemento.item(index));
};

//non funzionanti

// console.log("Ciclo forEach su children");
// nodiFiglio.forEach((item, i) => {
//   console.log(item(i));
// });

// for (let nome of nodiFiglio) {
//   console.log(nodiFiglio.item(i));
// }
