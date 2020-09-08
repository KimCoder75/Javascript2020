/* 
 * Trasformare la prima lettera di ogni parola di una stringa in maiuscolo
*/
    let str = "stringa da modificare";
    let arr = str.split(" "); //trasformiamo la stringa in array. I cui elementi sono individuati dallo spazio nella stringa
    for (let i = 0; i < arr.length; i++) { //facciamo un for per iterare l'array
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1); //sostituiamo l'elemento
    }
    str = arr.join(" ");
    console.log(str);

/*
 * Sostituire il % con la stringa JavaScript in "Maestro %. Corso JS su Udemy"
*/


    let str = "Maestro %. Corso JS su Udemy";
    let sostituisci = "JavaScript";
    let pos = str.indexOf("%");
    str = str.slice(0, pos) + sostituisci + str.slice(pos + 1);
    console.log(str);

/*
 * Troncare una stringa solo se più lunga di 16 caratteri e aggiungere 3 puntini finali con concat
*/

    let str = "Stringa da troncare dopo 16 caratteri";
    str = (str.length > 16 ? str.substring(0,16).concat('...') : str );
    console.log(str);    
    
/*
 * Generare un numero intero casuale tra due numeri ricevuti in input
*/

    const minimo = +prompt("Inserisci il limite inferiore");
    const massimo = +prompt("Inserisci il limite superiore");
    const diff = Math.abs(massimo - minimo);
    let casuale = minimo + Math.random() * diff;
    casuale = Math.floor(casuale);
    console.log(casuale);


/*
 * Far inserire un numero ad un utente finché non inserisce un numero pari. Quando inserisce un numero pari, mostrare nella console del browser i numeri inseriti.
*/


    let check = true;
    let numeri = [];
    while(check) {
        numeri.push(prompt("Inserisci un numero"));
        if(numeri[numeri.length-1] % 2 == 0) {
            check = false;
        }
    }
    console.log(`Hai inserito i numeri: ${numeri.join(" ")}`);
    
