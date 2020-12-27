/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/
/*
  * Symbol()
  * Valore unico e anonimo
*/
const ALTA = Symbol('1');
const BASSA = Symbol('2');

function allerta(tipo){
  if(tipo === ALTA){
    console.log('Allerta Massima');
  } else if (tipo === BASSA){
    console.log('Allerta Bassa');
    } else {
      console.log('Nessuna allerta da attivare');
    }
}
allerta(ALTA);
allerta(BASSA);
allerta(1);
allerta(2);
