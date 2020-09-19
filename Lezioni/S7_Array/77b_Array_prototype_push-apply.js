/* push e apply insieme
utilizzando push e apply insieme si uniscono due array
Sintassi

Array.prototype.push.apply(primo array, secondo array);

Non utilizzare questo metodo se il secondo array (moreVegs in questo esempio) è molto grande,
perché il numero massimo di parametri che una funzione può assumere è limitato nella pratica.
Vedere apply() per ulteriori dettagli.

meglio utilizzare concat?



*/

let numeri1 = [1,2,3,4,5,6,7],
    numeri2 = [8,9,10,11,12,13,14],
    numeri4 = [1,2,3,4,5,6,7],
    numeri5 = numeri2,

// uso di .concat per unire due array
    numeriTot = numeri4.concat(numeri5);

// uso di .push.apply per unire la seconda array alla prima
    Array.prototype.push.apply(numeri1, numeri2);

console.log(numeri1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
console.log(numeriTot); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// confronto tra i due array
console.log(numeri1 == numeriTot);
