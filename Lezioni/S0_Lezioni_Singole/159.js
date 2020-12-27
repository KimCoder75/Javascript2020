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

metodi match, search, replace (String.prototype)
*/
'use strict'
let testo = 'Maestro Maestro JS';
let pattern = /JS/gi;

let ris = testo.match(pattern);
let ris2 = testo.search(pattern);
let ris3 = testo.replace(pattern, 'Javascript');

// console.log(ris3);
// console.log( false || 'Giuseppe');

let giuseppe = (false)
let gianluca = (true)
let ris4 = (giuseppe || gianluca)

console.log(ris4);
