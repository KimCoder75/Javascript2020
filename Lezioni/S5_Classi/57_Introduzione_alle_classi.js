/* Gli oggetti ereditano Proprietà
e Metodi nella catena dei Prototipi
*/
/* con ES6 viene introdotto il concetto di classe
per avvicinare Javascript agli altri linguaggi di programmazione
*/

/* Le classi sono constructor function con
la proprietà prototype */

//sintassi
class User {

}
console.log(typeof User); //function
console.log(User); //class User prototype: Object { … }

// Class expression

let Utente = class {

};
console.log(typeof Utente); //function
console.log(Utente); //class User prototype: Object { … }
