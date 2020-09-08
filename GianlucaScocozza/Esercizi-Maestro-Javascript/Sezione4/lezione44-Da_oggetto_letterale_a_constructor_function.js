//Da oggetto letterale a constructor function
let user1={
 name:"Kim",
 descrivimi: () =>`Nome: ${this.name}`
};
let user2={
 name:"Loris",
 descrivimi: () =>`Nome: ${this.name}`
};
let user3={
 name:"Sandra",
 descrivimi: () =>`Nome: ${this.name}`
};

//Factory Function
function user(nome){
let obj={
  name:nome,
  descrivimi: () =>`Nome: ${this.name}`
};
return obj;
}
let user4 = user("Lucia");
console.log(user4);

//Constructor function
function Utenti(nome){
  this.name = nome;
  this.descrivimi = () =>`Nome: ${this.name}`
}
let user5 = new Utenti("Noemi");
let user6 = new Utenti("Mario");
let user7 = new Utenti("Pippo");
console.log(user5.descrivimi);
