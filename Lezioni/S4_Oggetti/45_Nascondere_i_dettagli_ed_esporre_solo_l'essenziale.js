/* Astrazione - Nascondere i dettagli ed esporre solo l'essenziale */

// //Constructor function di User
// function User(name,altezza){
//   let privata ="Informazione privata"; //variabile privata
//   this.name=name;
//   this.altezza=altezza;
//   this.pesoIdeale = function(){// le funzioni che fanno parte dell'oggetto sono introdotte da this.
//     return `Peso ideale ${calcolaPesoIdeale()}`;// si fa una chiamata ad una funzione privata che non fa parte dell'oggetto.
//     // return `Peso ideale ${this.calcolaPesoIdeale()}`;// si fa una chiamata ad una funzione pubblica fa parte dell'oggetto.
//   };
//   let calcolaPesoIdeale = function() { //funzione privata
//     return altezza - 100 * 0.95;
//   };
// // this.calcolaPesoIdeale = function() { //funzione pubblica
// //     return altezza - 100 * 0.95;
// //   };
// }
// User.prototype.type = "Utente Standard";
//
// let user1 = new User("Simone",175);
// console.log(user1.pesoIdeale());
// //stare attenti a maiuscole e minuscole.

//Semplificazione codice precedente
function Utente(nome,altezza){
  this.nome=nome;
  this.altezza=altezza;
  this.pesoIdeale = `Il peso ideale di ${nome} è ${(altezza - 100 * 0.95)} Kg.`;
  this.type = "Essere Umano";
  this.prototype ={genere:"Umano",tipologia:"Persona"};
}

let utente1 = new Utente("Simone",175),
    utente2 = new Utente("Marco",180),
    utente3 = new Utente("Giorgio",192),
    utente4 = new Utente("Kim",175);
utente4.segnozodiacale="Vergine";

console.dir(Utente);

// let utente5 = Object.create(utente4); // crea un oggetto utente5 utilizzando utente4 come prototipo
//utente4.prototype={tipologia:"Oggetto creato da utente3"};


//
// const utenti=[
// utente1,
// utente2,
// utente3,
// utente4
// ]
//
// for (var ut of utenti) {
//   // console.log(ut.pesoIdeale);
//   // console.log("La catena dei prototipi è la seguente:");
//   console.log(ut.prototype);
//   console.log(ut.__proto__);
//   // console.log(ut.__proto__.__proto__);
//   // console.log(ut.__proto__.__proto__.__proto__);
// }
//
// // stare attenti a maiuscole e minuscole.
