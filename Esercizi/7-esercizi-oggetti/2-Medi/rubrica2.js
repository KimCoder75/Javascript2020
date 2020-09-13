/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.
*/
let namesList = ["Kim", "Matteo Gabriele", "Erika Valentina", "Rebecca", "Stefano","Marco"],
    addressBook=[];

function User(name, phoneNumber){
    this.nome=name,
    this.telefono=phoneNumber
    this.summary = `${this.nome} ${this.telefono}`;
}

// arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
namesList.forEach((currentValue, index) => {
  let pn = Math.floor(Math.random()*4000)+7530000,
      phone=("02"+pn),
      obj = new User(currentValue, phone);
      addressBook.push(obj);
console.log(addressBook[index].summary);

});

let gianluca = new User("Gianluca","027530857");
addressBook.push(gianluca);
console.log(addressBook[6].summary);
//
//
// for(let name of namesList) {
//   let pn = Math.floor(Math.random()*4000)+7530000,
//       phone=("02"+pn),
//       obj = new User(name, phone);
//       addressBook[]
//       //addressBook[obj.nome] = obj;
//       console.log(addressBook[obj.nome]);
// }
console.table(addressBook);
// addressBook.Kim.summary();
// addressBook['Matteo Gabriele'].summary();
