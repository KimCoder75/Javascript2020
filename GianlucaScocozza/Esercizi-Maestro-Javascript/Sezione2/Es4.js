/*
 * Generare un numero intero casuale tra due numeri ricevuti in input
*/
let numS1=prompt("Inserisci un numero","n");
let numS2=prompt("Inserisci un numero","m");
num1=parseInt(numS1);
num2=parseInt(numS2);
console.log(num1);
console.log(num2);
let numMax = num2 > num1 ? console.log(Math.floor(Math.random()*(num2-num1+1))+num1) : console.log(Math.floor(Math.random()*(num1-num2+1))+num2);

//Math.floor(Math.random() * (max - min + 1)) + min; Il max è incluso e il min è incluso
