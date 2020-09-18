/* filter - filtrare gli elementi di un array
array.filter(elemento => elemento che restituisca il valore true alla condizione)

*/

const tv = [
{ disponibile:false, marca:"LG", dimensioni:"65 pollici", prezzo: 820},
{ disponibile:true, marca:"Sony", dimensioni:"55 pollici", prezzo: 680},
{ disponibile:false, marca:"Samsung", dimensioni:"60 pollici", prezzo: 780},
{ disponibile:true, marca:"Sony", dimensioni:"60 pollici", prezzo: 910},
{ disponibile:true, marca:"Panasonic", dimensioni:"65 pollici", prezzo: 1200},
{ disponibile:false, marca:"LG", dimensioni:"50 pollici", prezzo: 580}
];
tv.negozio = "Mediaworld";

// console.table(tv);
// console.dir(tv);
const economici = tv.filter(elemento => elemento.prezzo<800 && elemento.disponibile);
console.table(economici);

const numeri = [21,40,13,1,10];
const dispari = numeri.filter(numero => numero%2==1);
console.log(dispari);
