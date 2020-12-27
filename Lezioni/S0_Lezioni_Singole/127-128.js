//https://jsonplaceholder.typicode.com/
/*
  * Promise
*/
function azione(tipo){
  return new Promise((resolve, reject) => {
    let marmellataPortata = true;
    // if (marmellataPortata === true){
      if (marmellataPortata){
      resolve(`Azione ${tipo}: risolta`);
    } else {
      reject(`Azione ${tipo}: rifiutata`)
    }
  });
}

const obiettivo = azione('Portare marmellata');

obiettivo.then((risp)=>{
  console.log(risp);
  return azione('Fare la crostata')
})
.then((risp)=>{
  console.log(risp);
  return azione('Portare a nostra madre');
})
.then((risp)=>{
  console.log(risp);
})
.catch((err)=>{
  console.log(err);
});

// let a = [1,2,3];
// function fn(){
//   a.push(4);
//   return a;
// }
//
// const b = fn().reverse();
// console.log(b);
