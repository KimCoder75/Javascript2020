/*
* Esercitazione: Creazione utenti con nomi non duplicati
*/
let a = [],
    inizio = new Date().getTime();
// const c = (a.length=1000000);
for (var i = 0; i < 1000000; i++) {
  a.push(Math.floor(Math.random()*1000000));
}

let fine = new Date().getTime();
const tempoTrascorso=(fine-inizio);
console.log(`tempo trascorso: ${tempoTrascorso}`);
// console.log(a);

let b = [],
    binizio = new Date().getTime();
// const d = (b.length=1000000);
for (var k = 0; k < 1000000; k++) {
  b.push(Math.random()*1000000 | 0);
}

let bfine = new Date().getTime();
const btempoTrascorso=(bfine-binizio);
console.log(`tempo trascorso: ${btempoTrascorso}`);
// console.log(b);

const differenziale = tempoTrascorso - btempoTrascorso
console.log(differenziale);
