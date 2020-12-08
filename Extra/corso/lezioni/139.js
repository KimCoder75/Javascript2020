/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/
/*
  * Generatori (funzioni)
*/
function *gen(){
  let index = 0;

  while(true){
    yield index++;
  }
}

const genObj = gen();

console.log(genObj.next().value);
console.log(genObj.next().value);
console.log(genObj.next().value);
