/* JSON
Javascript Object Notation
* JSON.stringify()
* JSON.parse()
*/
let obj = {
  nome: "Gianluca",
  competenze: ["Javascript","CSS","HTML"]
};
console.log(obj);

let objJSON =JSON.stringify(obj);
console.log(objJSON);

let obj2 = JSON.parse(objJSON)
console.log(obj2);
