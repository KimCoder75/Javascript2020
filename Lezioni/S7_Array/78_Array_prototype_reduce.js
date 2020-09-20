/* reduce - riduce tutti gli elementi di un array ad un unico valore

Sintassi:
array.reduce(callback(accumulatore, elemento),valore da inizializzare)

*/
let serieFibonacci = [];
const numeri = [1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20],

      callback = (totaleTemporaneo, elemento) => totaleTemporaneo+elemento,
      // callback = function(totaleTemporaneo, elemento){
      //   serieFibonacci.push(totaleTemporaneo);
      //   totaleTemporaneo+elemento;
      // },
      somma = numeri.reduce(callback, 0);
      // 0+1 = 1
      // 1+2 = 3
      // 3+3 = 6
      // 6+4 = 10
      // 10+5 = 15
numeri.descrizione = "Uso del metodo reduce per sommare gli elementi dell'array."
console.log(numeri.descrizione);
console.log(numeri);
console.log(somma);
// console.log(serieFibonacci);non funziona

const a = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
],
      callback2 = (concatenatoTemp, elemento) => concatenatoTemp.concat(elemento);
      b = a.reduce(callback2,[]);
      // []+[1,2,3] = [1,2,3]
      // [1,2,3]+[4,5,6] = [1,2,3,4,5,6]
      // [1,2,3,4,5,6]+[7,8,9] = [1,2,3,4,5,6,7,8,9]
a.descrizione = "Uso del metodo reduce per concatenare array multidimensionali."
console.log(a);
console.log(a.descrizione);
console.log(b);





const tv = [
{ disponibile:false, marca:"LG", dimensioni:"65 pollici", prezzo: 820},
{ disponibile:true, marca:"Sony", dimensioni:"55 pollici", prezzo: 680},
{ disponibile:false, marca:"Samsung", dimensioni:"60 pollici", prezzo: 780},
{ disponibile:true, marca:"Sony", dimensioni:"60 pollici", prezzo: 910},
{ disponibile:true, marca:"Panasonic", dimensioni:"65 pollici", prezzo: 1200},
{ disponibile:false, marca:"LG", dimensioni:"50 pollici", prezzo: 580}
];
tv.negozio = "Mediaworld";
