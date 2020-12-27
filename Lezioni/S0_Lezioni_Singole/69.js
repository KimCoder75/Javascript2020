// export per aggiungere elementi alla API pubblica

// -------------------------------------
// export function fn_pubblica(){
//   console.log('Ciao da fn_pubblica');
// }
// export const fattore = 1.14;
// export let obj = {
//   p1: 10
// };
//
// function fn_privata(){
//   console.log('Ciao da fn_privata');
// }
// -------------------------------------

// In alternativa ed in modo più funzionale è possibile alla fine indicare cosa esportare
// tramite export {}

function fn_pubblica(){
  console.log('Ciao da fn_pubblica');
}
const fattore = 1.14;
let obj = {
  p1: 10
};

function fn_privata(){
  console.log('Ciao da fn_privata');
};

export {fn_pubblica, fattore, obj};
