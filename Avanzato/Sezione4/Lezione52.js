//this e arrow function
var user = {
nome:"Serena",
fn: function(){
  console.log(this.nome); // la funzione classica restituisce l'oggetto
},
// arrow function restituisce il contesto globale window
fn2:()=>console.log(this.nome)
 // N.B. se dobbiamo lavorare con le proprietà dell'oggetto dobbiamo utilizzare la funzione con notazione classica
// se non deve utilizzare le proprietà dell'oggetto possiamo utilizzare le arrow function
};

var nome ="Gianluca";
/* le variabili tipo let e const non vengono aggiunte
all'oggetto window.
utilizzando var invece la proprietà user viene aggiunta all'oggetto window

*/
window.user.fn();
window.user.fn2();
