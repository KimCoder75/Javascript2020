/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.
*/
let namesList = ["Kim", "Matteo Gabriele", "Erika Valentina", "Rebecca", "Stefano","Marco"],
    addressBook=[];

function User(name, phoneNumber){
    this.nome=name,
    this.telefono=phoneNumber,
    this.summary = function() {
        console.log(this.nome, this.telefono);
    }
}

for(let name of namesList) {
    let obj = new User(name, '333');
    addressBook[obj.nome] = obj;
}

addressBook.Kim.summary();
addressBook['Matteo Gabriele'].summary();
