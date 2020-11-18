/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/
/*
  * Async - Await
*/

async function getUtenti(){
  const utentiJSON = await fetch('utenti.json');
  const utenti = utentiJSON.json();
  return utenti;
}

getUtenti().then(utenti => console.log(utenti));
