/* all'interno di una classe non possiamo definire Variabili
con var let oppure constructor*/

class UserClass {
  constructor(nome, anni){
    this.nome=nome;
    this.anni=anni;
  }
  info(){
    return `Nome: ${this.nome}. Età: ${this.anni}`
  }

}
const mirco = new UserClass("Mirco",24);
console.log(mirco.info());
console.log(UserClass);

function UserClass2(nome,anni){
  this.nome=nome;
  this.anni=anni;
}
UserClass2.prototype.info = function(){
  return `Nome: ${this.nome}. Età: ${this.anni}`
}
const gianluca = new UserClass2("Gianluca",28);
console.log(gianluca.info());
console.log(UserClass2);
