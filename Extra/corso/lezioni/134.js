/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/
/*
  * Protocollo iterator e iterable
*/
function mioIteratore(array){
  let cursore = 0;

  return {
    next() {
      return cursore < array.length ?
      { value: array[cursore++], done : false }:
      { done: true }
    }
  }

}

let iteratore = mioIteratore([3,5,6]);
console.log(iteratore.next());
console.log(iteratore.next());
console.log(iteratore.next());
console.log(iteratore.next());
