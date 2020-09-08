/* Scrivere una funzione che accetta
una stringa e restituisce
la parola più lunga all'interno della stringa
*/

// Versione 1
function trovaParolaLunga(string) {
let arrL = [];
let arr = string.split(" ");
arr.forEach((item) => {
  arrL.push(item.length);
});

let lung = Math.max(...arrL)
let index = arrL.indexOf(lung);
console.log(arr[index]);
// console.log(arr[arrL.indexOf(Math.max(...arrL))]);
}
trovaParolaLunga(prompt("Inserisci una frase:"))


// versione 2 come da esempio
function parolalunga(stringa){

let lista = stringa.split(" ");
let max = lista[0];
for (var i = 1; i < lista.length; i++) {
  max = lista[i].length > max.length ? lista[i] : max;
}
console.log(max);

}
parolalunga(prompt("Inserisci una frase"));
