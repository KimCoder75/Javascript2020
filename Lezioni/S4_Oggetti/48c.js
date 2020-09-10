let macchine=[];
function Ferrari(){
}
Ferrari.prototype.marchio = `\u{00A9} Ferrari`;
macchine.push(Ferrari);
let ferrari_458 = new Ferrari();
macchine.push(ferrari_458);
ferrari_458.cilindrata=1600;
ferrari_458.prototype={cavalli:160};
let ferrari_458speciale = Object.create(ferrari_458);
macchine.push(ferrari_458speciale);
console.log(macchine);
//let macchine=[Ferrari,ferrari_458,ferrari_458speciale]
for (var variable of macchine) {
console.log(macchine.pop(variable));
  console.log(variable);
  console.log(".prototype");
  console.log(variable.prototype);
  console.log(".__proto__");
  console.log(variable.__proto__);
  // console.log(".__proto__.__proto__");
  // console.log(variable.__proto__.__proto__);
}
