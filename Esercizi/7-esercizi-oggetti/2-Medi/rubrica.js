/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.
*/
//Array contenente i nomi da trasformare in oggetti
let namesList = ["Kim", "Matteo Gabriele", "Erika Valentina", "Rebecca", "Camilla","Matteo", "Stefano","Marco"],
    addressBook=[]; //array contenente gli oggetti nomi

//constructor function generazione utenti
function User(name, phoneNumber){
   this.nome=name,
   this.telefono=phoneNumber,
   this.summary = () => console.log(this.nome, this.telefono)
 }

//inserimento di type nel prototype di User
User.prototype.type="Familiari e Amici";

//funzione generante rubrica dal lista nomi e generatore di numero telefonico
function userFromArray(){
  for (var us of namesList) {
    let id=0,
        pn = Math.floor(Math.random()*4000)+7530000,
        phone=("02"+pn),
        namesList[id]=new User(us,phone);
        addressBook.push(generatedUser);
        console.log(addressBook[id].summary());
        id+=1
  }
}
userFromArray();
console.table(addressBook);
