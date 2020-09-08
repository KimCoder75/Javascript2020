class UserClass {

  avatar="nessun avatar";
  #privata="Proprietà privata";
  constructor(nome){
    this.nome=nome;
  }
  getPriv(){
    return this.#privata;
  }

}
const monica = new UserClass("Monica");
console.log(monica.avatar);
console.log(monica.getPriv());
//console.log(UserClass);

// S2019 possiamo implementare proprietà pubbliche e private(solo in Chrome) al di fuori del costruttore
