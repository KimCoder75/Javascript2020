/* reduce - riduce tutti gli elementi di un array ad un unico valore
array.reduce(callback(accumulatore, elemento),valore da inizializzare)

*/
const numeri = [1,2,3,4,5];
const callback = (totaleTemporaneo, elemento) => totaleTemporaneo+elemento;

const somma = numeri.reduce(callback, 0);
//0+1 = 1
//1+2 = 3
//3+3 = 6
//6+4 = 10
//10+5 = 15
console.log(somma);

const a = [
[1,2,3],
[4,5,6],
[7,8,9],
];

const callback2 = (concatenato, elemento) => concatenato.concat(elemento);
const b = a.reduce(callback2,[]);
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
