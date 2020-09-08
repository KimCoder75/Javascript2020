/*Una Constructor function
riceve in input dei parametri e
utilizziamo this per fare in modo che
gli oggetti creati dalla constructor function
abbiano una copia di quelle proprietà
con i valori passati in input
*/
function User(nome,anni){
this.nome=nome;
this.anni=anni;
this.descrivimi= () =>`Mi chiamo ${nome} ed ho ${anni} anni.`
};
const utente1 = new User("Giovanni",55);
const utente2 = new User("Giorgio",45);
const utente3 = new User("Giacomo",35);
const utente4 = new User("Gianluca",25);
let classe =[
utente1,
utente2,
utente3,
utente4
];
for (var utente of classe) {
  console.log(utente.descrivimi());
}
for (var utente of classe) {
  console.log(utente);
}
console.log(typeof utente4);
console.log(Object.getPrototypeOf(utente4)==User.prototype);


class UserClass {
constructor(nome, anni){
this.nome=nome;
this.anni=anni;
this.descrivimi= () =>`Mi chiamo ${nome} ed ho ${anni} anni.`
}
}
// creo un'istanza della classe UserClass
const michele = new UserClass("Michele",29);
console.log(typeof michele);
console.log(michele);
console.log(michele.descrivimi());
console.log(Object.getPrototypeOf(michele)==UserClass.prototype);
