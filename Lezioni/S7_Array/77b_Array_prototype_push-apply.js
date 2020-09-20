/* push e apply insieme
utilizzando push e apply insieme si uniscono due array
Sintassi:
Array.prototype.push.apply(primo array, secondo array);

Non utilizzare questo metodo se il secondo array è molto grande,
il numero massimo di parametri che una funzione può assumere è limitato
nella pratica.

Meglio utilizzare lo spread operator!

*/

let numeri1 = [1,2,3,4,5,6,7],
    numeri2 = [8,9,10,11,12,13,14],
    numeri4 = [1,2,3,4,5,6,7],
    numeri5 = numeri2,

// uso di .concat() per unire due array.
    numeriTot = numeri4.concat( numeri5 ),

// uso dello spread operator per unire due array.
    numeriS = [...numeri4,...numeri5];

// uso di .push.apply per unire il secondo array al primo.
Array.prototype.push.apply( numeri1, numeri2 );

console.log( numeriTot ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
console.log( numeriS ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
console.log( numeri1 ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// il confronto tra oggetti e array è sempre falso.
console.log( numeriTot == numeriS ); // false

// solo in caso due variabili puntino allo stesso oggetto verrà restituito true
console.log( numeri5 == numeri2 ); // true
