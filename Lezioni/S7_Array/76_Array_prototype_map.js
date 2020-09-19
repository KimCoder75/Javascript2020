/* map effettuare operazioni per ogni elemento di un array
sintassi: array.map(elemento => operazione su elemento);
a map si passa una funzione di callback che avrà come argomento l'elemento restituira le operazione sull'elemento

*/

const tv = [
{ marca:"LG", dimensioni:"65 pollici", prezzo: 820},
{ marca:"Sony", dimensioni:"55 pollici", prezzo: 680},
{ marca:"Samsung", dimensioni:"60 pollici", prezzo: 780},
{ marca:"Sony", dimensioni:"60 pollici", prezzo: 910},
{ marca:"Panasonic", dimensioni:"65 pollici", prezzo: 1200},
{ marca:"LG", dimensioni:"50 pollici", prezzo: 580}
];

// console.table(tv);
// const prezzi = tv.map(p => p.prezzo);
// console.table(prezzi);

console.table(tv);
const prezzi = tv.map(p => (p.prezzo<690?"Fascia economica":"Fascia Media"));
console.table(prezzi);

const numeri = [40,50,60,89,60,50],
      diviso2 = numeri.map(x => x/2);
console.log(numeri);
console.log(diviso2);
