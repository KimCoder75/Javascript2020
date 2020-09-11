/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.

  Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
  L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.

  Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
  Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

  Variante:
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
  e ricava l'indice sul quale applicare l'operazione.

  http://www.imparareaprogrammare.it
*/

// 1)
// Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
// L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.

let user = function(nome, cognome, telefono){
  this.nome=nome,
  this.cognome=cognome,
  this.numeroTelefone=telefono
}

//2) Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
let nomiRubrica =["aldo","giovanni","giacomo"];

//3)  Implementa i metodi dell'oggetto per le seguenti operazioni:
      //- Visualizzazione dell'intera lista contatti
function viewUsers(){
  for (var ut of nomiRubrica) {
    console.log(ut);
  }
}
console.log(viewUsers());




      // - Inserimento di un nuovo contatto
      // - Modifica di uno contatto passando in input l'indice dell'array
      // - Cancellazione di un contatto passando in input l'indice dell'array
      // - Ricerca passando il nome e restituendo il singolo contatto.
