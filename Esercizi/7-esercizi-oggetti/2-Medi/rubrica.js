/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.
*/
//Array contenente i nomi da trasformare in oggetti
let namesList = ["Kim", "Matteo Gabriele", "Erika Valentina", "Rebecca", "Stefano","Marco"],
    addressBook=[];

//constructor function generazione utenti
function User(name, phoneNumber){
    this.nome=name,
    this.telefono=phoneNumber
    this.summary = `${this.nome} ${this.telefono}`;//semplificazione da funzione a stringa
}

//inserimento di type nel prototype di User
User.prototype.type="Familiari e Amici";

//Generazione rubrica da array nomi numero telefonico
// utilizzo di forEach per utilizzare anche l'indice
namesList.forEach((currentValue, index) => {
  let pn = Math.floor(Math.random()*4000)+7530000,
      phone=("02"+pn),
      obj = new User(currentValue, phone);
      addressBook.push(obj);
console.log(addressBook[index].summary);
});

//inserimento extra in onore dell'istruttore ;)
let gianluca = new User("Gianluca e non Giuseppe!","027530857");
addressBook.push(gianluca);
console.log(addressBook[6].summary);
console.table(addressBook);
console.log(addressBook[6].type);
