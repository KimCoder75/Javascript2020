/*
  I primi numeri…primi!
  Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.

  Esempio:
    Input: n = 5
    Output:
          TRUE

            2
            3
            5
            7
            11


  Consigli:
  Per non ripetere il codice, nella seconda funzione puoi richiamare la prima funzione ;)

  http://www.imparareaprogrammare.it
*/
// let num=prompt("Inserisci un numero");
// let collection=[];
// for (var n = 2; n < num*10; n++) { //espediente senza while
// let res=true;
// for (var i=2; i<n ;i++) {
// if(n%(i)==0){
// res=false;
// };
// };
// if (res){
//  collection.push(n);
// };
// };
// collection.length=num; // espediente per ridurre l'array
// console.log(`Ecco l'elenco dei primi ${num} numeri primi:`);
// for (var i = 0; i < collection.length; i++) {
// console.log(collection[i]);
// };

//29/08/2020 versione corretta, utilizzato un contatore anzichè un'array.
const num=prompt("Quanti numeri Primi vuoi vedere?"); // questa è una costante ed è anche la lunghezza massima che deve avere l'array che contiene i numeri
let numberToCheck = 2, // nome chiaro già inizializzato a 2 che è il primo numero primo
    primeCounter=0,
    // collection=[], // uso della virgola per non ripetere let
    isPrime; // nome chiaro variabile se è un numero primo senza inizializzazione

// while(collection.length < num) { // continua finchè la lunghezza dell'array è inferiore al numero inserito
while (primeCounter<num){
    isPrime = true; // imposta a true il risultato
    for(let i=2; i<numberToCheck; i++) { // esegui un ciclo da 2 al numero da controllare
        if(numberToCheck%(i)==0){ // se il numero da controllare è divisibile con resto 0
            isPrime=false; // cambia lo stato di primo a falso
            break; //interrompi il ciclo for
        };
    }
    if(isPrime) { // se prime è vero
        // collection.push(numberToCheck); //aggiungi il numero da controllare a collection
        primeCounter+=1
        console.log(numberToCheck);
    }
    numberToCheck++; //aggiungi 1 al numero da controllare
};
