/*
* Ajax (Asynchronous Javascript And XML)
*
* XMLHttpRequest object (XHR)
*
Recuperiamo informazoni senza ricaricare tutta la pagina

Ajax gestisce
  file XML
  file txt
  file json

gestiamo tramite AJAX richieste di invio e ricezione dati


quando si interagisce con un server
0) Creaiamo un'instanza dell'oggetto XMLHttpRequest
a) apriamo una connessione con il server con il metodo OPEN
a1) indichiamo il tipo di richiesta che vogliamo effettuare GET
a2) indichiamo la risorsa a cui vogliamo accedere
a3) indichiamo tramite un booleano se vogliamo operare in modo asincrono o meno
b) inviamo la richiesta tramite il metodo send


il server invia la risposta che è presente nel nostro browser
c) noi manipoliamo le risposto del server a nostro piacimento
*/




console.log(1);
// qui definisco cosa fare, invio una richeista xhr in modo asincrono del file file1.txt,

// creo la richiesta

// 1) che tipo di richiesta è?
// XMLHttpRequest
const xhr = new XMLHttpRequest(); // crea un'istanza XHR(XMLHttpRequest)

// apro un a connessione con il server
// 2) di che tipo? GET (prendi informazioni)
// 3) che risorsa riguarda? il file1.text
// 4) la richiesta è asincrona? true

xhr.open('GET','file1.txt', true); // apro una connessione con il serveretramite il metodo GET, il file file1.txt, in modo asincrono(true, false sincrono)

// 5) invio la richiesta
xhr.send();

// come faccio a visulizzare il contenuto della risposta?
// tramite l'event handler
// 6) quando mostro il contenuto della risposta
// al caricamento
// 7) Mi devi dire cosa devo farne di questi dati
// ok, creo una funzione che mi faccia vedere il contenuto del file
xhr.onload = function(){
  console.log(xhr.responseText); // mostra tramite responseText il contenuto del file
}

console.log(2);
