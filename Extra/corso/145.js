/*
* Gestione delle eccezioni
*/
// 'use strict';

try {
  // throw new TypeError('Eccezione da noi sollevata');
} catch(err){
    console.dir(err);
} finally {
  console.log('Vengo sempre eseguito');
}
