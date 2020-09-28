/* di base si ha una propagazione Bubbling, cioè dall'elemento più interno verso
quello più esterno, ma se mettiamo true come terzo parametro, questo di inverte,
di parte dall'esterno verso l'interno
*/



document.addEventListener('click',(e)=>{
  console.log('Hai cliccato in una parte del documento');
},true);

let section = document.getElementsByTagName('section')[0];
section.addEventListener('click',(e)=>{
  console.log('Hai cliccato sull\'elemento section');
},true);

let blocco1 =document.querySelector('#ElencoBlocchi > div');
blocco1.addEventListener('click',(e)=>{
  console.log('Hai cliccato sul blocco1');
});
