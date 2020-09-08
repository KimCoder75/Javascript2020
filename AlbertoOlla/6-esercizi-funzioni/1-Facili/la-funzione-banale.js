/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE


  http://www.imparareaprogrammare.it
*/
const list = ["1",2,3,"4",1,"2","3",4];
const l = list.length;
var n = list[(Math.floor(Math.random() * l))];
var m = list[(Math.floor(Math.random() * l))];
console.log(n,m);
function veroOFalso(a,b) {
return(a === b);
}
var res = veroOFalso(n,m);
console.log(res);
