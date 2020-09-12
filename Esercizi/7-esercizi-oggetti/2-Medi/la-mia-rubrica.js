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

let User = function(nome,telefono){
  this.nome=nome,
  this.numeroTelefono=telefono
}
//  (Math.random() * (max-min) + min) ovvero, nel tuo caso:
//2) Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
let nomiRubrica =["Aldo","Giovanni","Giacomo"];

//3)  Implementa i metodi dell'oggetto per le seguenti operazioni:
      //- Visualizzazione dell'intera lista contatti
function viewUsers(){
    console.log("Ecco la lista dei nomi trovati in rubrica:");
  // for (var ut of nomiRubrica) {
  //   console.log(ut);
  // }
  return console.table(nomiRubrica)
}
viewUsers();

//4) Inserimento di un nuovo contatto
function enterNewUser(){
  let nu = prompt("Inserisci un nuovo utente");
  nomiRubrica.push(nu);
  alert("Operazione avvenuta con successo");
}
enterNewUser();
console.clear();
viewUsers();

//5) - Modifica di uno contatto passando in input l'indice dell'array
function modifyUser(){
  let ind = prompt("Inserisci l'indice del nome da modificare"),
      mn = prompt(`Quale utente vuoi inserire al posto di ${nomiRubrica[+ind]}?`);
      nomiRubrica[+ind]=mn;
      alert("Operazione avvenuta con successo");
}

//6) - Cancellazione di un contatto passando in input l'indice dell'array
modifyUser();
console.clear();
viewUsers();
function deleteUser(){
  let ind = prompt("Inserisci l'indice dell'utente da cancellare"),
      mn = alert(`${nomiRubrica[+ind]} sarà cancellato dalla rubrica.`);
      nomiRubrica.splice(ind,1);
      alert("Operazione avvenuta con successo");
}
deleteUser();
console.clear();
viewUsers();
function numTel(){
return Math.floor(Math.random()*(4000)+7530000);
}
console.log(`Numero di telefono: 02${numTel()}`);

// function genRubr(){
//   for (var name of nomiRubrica) {
//      new User(name,numTel());
//     console.log(User);
//   }
// }


      // - Ricerca passando il nome e restituendo il singolo contatto.
