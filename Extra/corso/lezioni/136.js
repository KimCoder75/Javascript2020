/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/
/*
  * async iterator
*/
let rangeObj = {
  from: 10,
  to: 16,
  [Symbol.asyncIterator](){
    let current = this.from;
    return {
      next: () => {
        return current <= this.to ?
        Promise.resolve({value: current++, done: false}) :
        Promise.resolve({done: true})
      }
    }
  }
};
console.log('Inizio');
(async function(){
  for await (let numero of rangeObj){
    console.log(numero);
  }
})();
console.log('Fine');
