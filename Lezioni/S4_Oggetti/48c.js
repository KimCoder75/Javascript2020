function Ferrari(){
}
Ferrari.prototype.marchio = `\u{00A9} Ferrari`;
let ferrari_458 = new Ferrari();
ferrari_458.cilindrata=1600;
let ferrari_458speciale = Object.create(ferrari_458);
let macchine=[Ferrari,ferrari_458,ferrari_458speciale]
for (var variable of macchine) {
console.log("Mostra l'oggetto");
  console.log(variable);
  console.log(".prototype");
  console.log(variable.prototype);
  console.log(".__proto__");
  console.log(variable.__proto__);
}
