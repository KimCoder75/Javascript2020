/*
* Confronta velocità tra Math.floor e operatore bitwise |
*/

let a = [];
let a1 =[];
console.time();
for (let i = 0; i < 100000; i++) {
  a.push(Math.floor(Math.random()*200));
}
console.timeEnd();
console.log(a);
a.forEach((item, i) => {
  if(item<100){
    a1.push(item)
  }
});
console.log(a1.length);

a = [];
console.time();
for (let i = 0; i < 100000; i++) {
  a.push(Math.random()*200 | 0);
}
console.timeEnd();
console.log(a);
