/*
* Gestione delle eccezioni
*/
// 'use strict';

function fn(){
  fn();
}

try {
  null.fn();
} catch(e){
  console.dir(e);
}
console.log(1);
