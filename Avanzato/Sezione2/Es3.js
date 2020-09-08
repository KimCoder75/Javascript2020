/*
 * Troncare una stringa solo se più lunga di 16 caratteri e aggiungere 3 puntini finali con concat
*/
let str ='Stringa da troncare dopo 16 caratteri ed aggiungere 3 punti.';
console.log(str);
console.log("Caratteri totali frase: "+str.length);

//var 1
// if (str.length>16) {
//   console.log(str.slice(0,16).concat("..."));
// }
// else {
//   console.log(str);
// }

//var 2 con operatore ternario
str = str.length > 16 ? str.substring(0,16).concat("..."): str;
console.log(str);
