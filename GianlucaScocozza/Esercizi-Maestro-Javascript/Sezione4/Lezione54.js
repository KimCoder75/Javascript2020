/* Object.defineProperty */
'use strict';
let obj = {
p1:10
};
console.log(obj.p1);

let caratteristiche = {
value: 20,
enumerable: false,
writable: false
};
Object.defineProperty(obj, "p2",caratteristiche);
console.log(obj);
for (var variable in obj) {
  console.log(variable);
}
console.log(obj.p2);
obj.p2="Giannino"; // essendo non writable assume valore di costante
console.log(obj.p2);
