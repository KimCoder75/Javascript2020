/*
* Memorizzare array e oggetti nel local storage
*/


// -------------------------------
// localStorage.setItem('info',{ a:10, b:20});
// localStorage.setItem('voti',[29,26,38]);
//
// let voti = localStorage.getItem('voti');
// console.log(typeof voti);
// -------------------------------
// let obj ={ a:10, b:20};
// let objJSON = JSON.stringify(obj);
// let voti = [29,26,38];
// let votiJSON = JSON.stringify(voti);
//
// localStorage.setItem('info',objJSON);
// localStorage.setItem('voti',votiJSON);
//
// console.log(typeof voti);
// console.log(typeof info);
// -------------------------------

let infoJSON =localStorage.getItem('info');
let votiJSON =localStorage.getItem('voti');

console.log(JSON.parse(infoJSON));
console.log(JSON.parse(votiJSON));
