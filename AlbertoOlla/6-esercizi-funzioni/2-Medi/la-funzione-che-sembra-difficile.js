/*
  La funzione che sembra difficile
  Scrivi una funzione che
  prenda in input due numeri N e K e
  restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N,
  la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4


  http://www.imparareaprogrammare.it
*/

a = prompt("Inserisci un numero n");
b = prompt("Inserisci un numero k");
function kappesima(n,k){
kesima = (n.length - k);
(k > n.length) ? res = 0 : res = `la ${k}a cifra da destra di ${n} è ${n[kesima]}, da sinistra è ${n[k-1]}`;
return res;
}
console.log(kappesima(a,b));
