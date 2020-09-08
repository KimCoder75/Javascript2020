function calcola(arg1,...numeri){
let somma=0;
for (var numero of numeri) {
// console.log(numero);
  somma+=numero;

}
console.log(arg1);
console.log(somma);
console.log(numeri);
}
calcola(100,500,4,2,10,20,30,40,50);
