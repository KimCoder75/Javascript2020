// Accesso alle proprietà di un oggetto
let user = {
name:"Kim",

//nomi proprità non validi
"anni": 44,
4:"Ciao",
"buon giorno": "salve"
};
console.log(user.name);
console.log(user.anni);
console.log(user["anni"]);
/*le proprietà vengono trasformate in stringhe,
quindi è possibile accedere alla proprità convertendo la stringa o richimando direttamente la stringa*/


/* in questo caso non utilizziamo il punto per accedere alla proprietà ma le parentesi quadre,
Javascript, risolve prima l'espressione che trova tra parentesi e poi va a cercare la proprietà corrispondente .
*/
console.log(user[4]);
console.log(user[12-8]);
console.log(user["buon giorno"]);

let nome = "name";
console.log(user[nome]);
