/*
Espressoni Regolari

Flags
/ /g = globale
/ /i = insensitive (non fa distinzioni tra maiuscole e minuscole)
/ /m = multiline (multilinea)
/ /s = single line (dotall)
/ /u = unicode
/ /y = sticky

Quantificatori
{3} 3
{3,} almeno 3
{3,5} da 3 a 5
Sintassi /m{3,5}iao/g
m da 3 a 5 volte massimo seguito da i a o a livello globale
*/

let ogj = {}; //new Object()

let testo = 'Corso Maestro Maestro Javascript. Sezione espressioni regolari';
const reg = /maestro/g;
// const reg2 = new RegExp('maestro', 'g');
// console.log(Object.getPrototypeOf(reg) === RegExp.prototype);
// console.log(RegExp.prototype);
let ris = reg.test(testo);
// let ris2 = reg.exec(testo);
console.log(ris);
// console.log(ris2);
