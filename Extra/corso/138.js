/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/
/*
  * Generatori (funzioni)
*/
function *myGen(){
  console.log('Corso');
  let v1 = yield 10;
  console.log(v1);
  yield;
  console.log('Javascript');

}

const gen = myGen();
let v1 = gen.next().value;
v1 += (Math.random()*10) | 0;
gen.next(v1);
