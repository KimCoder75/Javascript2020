/* di base si ha una propagazione Bubbling, cioè dall'elemento più interno verso
quello più esterno, ma se mettiamo true come terzo parametro, questo di inverte,
di parte dall'esterno verso l'interno
*/



// document.addEventListener('click',(e)=>{
//   // e.stopPropagation();
//   console.log('Hai cliccato in una parte del documento');
// });

let section = document.getElementsByTagName('section')[0];
section.addEventListener('click',(e)=>{
  // e.stopPropagation();
  console.log('Hai cliccato sull\'elemento section');
});

let blocco1 =document.querySelector('#ElencoBlocchi > div');
blocco1.addEventListener('click',(e)=>{
  // e.stopPropagation();
  console.log('Hai cliccato sul blocco1');
});

let nav = document.querySelector('nav');
nav.addEventListener('click',(e)=>{
  e.preventDefault();// impedisce il comportamento di default
});
