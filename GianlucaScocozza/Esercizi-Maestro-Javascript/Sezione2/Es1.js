/*
 * Trasformare la prima lettera di ogni parola di una stringa in maiuscolo
*/
let str='Questa frase verrà modificata: tutte le prime lettere della frase diventeranno maiuscole'
console.log(str);

let arr = str.split(' ');
console.log(arr);

for (var i = 0; i < arr.length; i++) {
  arr[i]=arr[i][0].toUpperCase()+arr[i].substring(1);
}
console.log(arr);

str = arr.join(" ");
console.log(str);
