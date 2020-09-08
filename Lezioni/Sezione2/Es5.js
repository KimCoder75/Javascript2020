/*
 * Far inserire un numero ad un utente
 finché non inserisce un numero pari.
 Quando inserisce un numero pari,
 mostrare nella console del browser
 i numeri inseriti.
*/

    // let check = true;
    // let numeri = [];
    // while(check) {
    //     numeri.push(prompt("Inserisci un numero"));
    //     if(numeri[numeri.length-1] % 2 == 0) {
    //         check = false;
    //     }
    // }
    // console.log(`Hai inserito i numeri: ${numeri.join(" ")}`);


let dispari = true;
let arr = [];
    while (dispari) { // finché non inserisce un numero pari.
        arr.push(+prompt("Inserisci un numero"));//Far inserire un numero ad un utente
        if (arr[arr.length-1]%2 == 0) { //Quando inserisce un numero pari,
          dispari = false;
        }
    }
console.log(...arr);// mostrare nella console del browser i numeri inseriti.
