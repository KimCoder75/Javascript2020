/*
ENGINE
RUNTIME
HOISTING
SCOPE
CLOSURE
PROGRAMMAZIONE ASINCRONA
*/
// console.log(a);
// var a = 10; // hoisting

// let a = 10;
//const a = 10;

// ------------
// test();
//
// function test() { // hoisting
//   console.log("Ciao da test");
// }
// --------------
// console.log(1);
// const callback = ()=> {
//   console.log(2);
// };
// setTimeout(callback,5000); //esegui la callback dopo 5000 millisecondi
// //programmazione asincrona
// console.log(3);
// -----------------------------------------------------
for (var i = 0; i < 3000000000; i++) {// operazione bloccante rende l'interfaccia non fluida
  i+= 1;
}
console.log(i);
