/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/
/*
  * Protocollo iterator e iterable
*/
let rangeObj = {
  from: 10,
  to: 16,
  [Symbol.iterator](){
    let current = this.from;
    return {
      next: () => {
        return current <= this.to ?
        {value: current++, done: false} :
        {done: true}
      }
    }
  }
}

let str = 'Maestro Javascript';
for (let lettera of str) {
  console.log(lettera);
}

for (let numero of rangeObj){
  console.log(numero);
}
