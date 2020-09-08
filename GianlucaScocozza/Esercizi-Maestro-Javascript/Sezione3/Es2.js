/* Scrivere una funzione ricorsiva
che dato un valore x e un valore n,
esegue la potenza di x alla n
*/
// function potenza(x,n){
//   console.log(x**n);
// }
// potenza(2,3);

function pR(x,n){
if (x == 1 || n == 0 ) {
  return 1;
}
return n == 1 ? x :
(x * pR(x,n-1));

}
let ris = pR(2,12);
console.log(ris);
