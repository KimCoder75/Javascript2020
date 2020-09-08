/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var arr =[10,-2,31,22,15,-6,7];
function Max(arr) {return Math.max.apply(null, arr);}
console.log(`La giornata più calda ha raggiunto i :${Max(arr)} gradi.`);
function min(arr) {return Math.min.apply(null, arr);}
console.log(`La giornata più fredda ha raggiunto i :${min(arr)} gradi.`);
