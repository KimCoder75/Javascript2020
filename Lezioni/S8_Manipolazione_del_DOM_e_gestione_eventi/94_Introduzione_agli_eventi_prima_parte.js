/*
Javascript è un linguaggio orientato agli oggetti ed agli S8_Manipolazione_del_DOM_e_gestione_eventi
addEventListener

sintassi blocco1.addEventListener('evento',callback)
*/
// const blocco1 = document.querySelector("section > div");
const sezione = document.querySelector("section");
// blocco1.addEventListener('click', ()=>{
// sezione.addEventListener('click', ()=>{
document.addEventListener('click', ()=>{
  // console.log("Hai cliccato su BLOCCO1");
    // console.log("Hai cliccato su un elemento della sezione");
    console.log("Hai cliccato da qualche parte nel documento");
});
