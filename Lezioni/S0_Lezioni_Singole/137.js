/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/
/*
  * Generatori (funzioni)
*/
function *myGen(){
  console.log('Corso');
  yield;
  console.log('Maestro');
  yield;
  console.log('Javascript');

}

const gen = myGen();
gen.next();
gen.next();
gen.next();
