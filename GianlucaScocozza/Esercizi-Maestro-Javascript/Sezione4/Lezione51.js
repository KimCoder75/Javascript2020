/*Binding esplicito con bind, call e apply*/

// BINDING IMPLICITO
function test(){console.log(50);}
  let obj = {
    fn:test
  };
  window.test();
  obj.fn();
// BINDING ESPLICITO
//call, apply, bind
let obj1 = {
nome:"Gianluca",
};
let obj2 = {
nome:"Luisa",
};
function saluta(indirizzo, lavoro){
  console.log(`Ciao sono ${this.nome}. Abito in ${indirizzo},
lavoro come ${lavoro}`);
}
saluta.call(obj1,"via dei Cedri 12", "3d Modeler.");
saluta.call(obj2,"Calle Colombe", "Programmatrice.");
saluta.apply(obj1,["Calle Colombe", "Programmatrice."]);

let rif = saluta.bind(obj2);
rif("Via Antani 14", "attore comico, scuola Gassmann")
