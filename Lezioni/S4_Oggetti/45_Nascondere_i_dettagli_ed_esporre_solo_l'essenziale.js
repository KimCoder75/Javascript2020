/* Astrazione - Nascondere i dettagli ed esporre solo l'essenziale */

//Constructor function di User
function User(name,altezza){
  let privata ="Informazione privata"; //variabile privata
  this.name=name;
  this.altezza=altezza;
  this.pesoIdeale = function(){// le funzioni che fanno parte dell'oggetto sono introdotte da this.
    return `Peso ideale ${calcolaPesoIdeale()}`;// si fa una chiamata ad una funzione privata che non fa parte dell'oggetto.
    // return `Peso ideale ${this.calcolaPesoIdeale()}`;// si fa una chiamata ad una funzione pubblica fa parte dell'oggetto.
  };
  let calcolaPesoIdeale = function() { //funzione privata
    return altezza - 100 * 0.95;
  };
// this.calcolaPesoIdeale = function() { //funzione pubblica
//     return altezza - 100 * 0.95;
//   };
}
User.prototype.type = "Utente Standard";

let user1 = new User("Simone",175);
console.log(user1.pesoIdeale());
//stare attenti a maiuscole e minuscole.

//Semplificazione codice precedente
function Utente(nome,altezza){
  this.nome=nome;
  this.altezza=altezza;
  this.pesoIdeale = `Il peso ideale di ${nome} è ${(altezza - 100 * 0.95)} Kg.`;
}
Utente.prototype.type = "Utente Standard";
let utente1 = new Utente("Simone",175);
console.log(utente1.pesoIdeale);
console.log("La catena dei prototipi è la seguente:");
console.log(utente1.__proto__);
console.log(utente1.__proto__.__proto__);
console.log(utente1.__proto__.__proto__.__proto__);
let utente2 = new Utente("Marco",180);
console.log(utente2.pesoIdeale);
utente2.type="Super User";
console.log(utente1.type);
console.log(utente1);
console.log(utente2.type);
console.log(utente2);
console.log(utente2.__proto__);
// stare attenti a maiuscole e minuscole.
