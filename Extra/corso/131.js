/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/
/*
  * API Fetch per richiedere http
*/

const risposta = fetch('utenti.json')
.then((risposta)=>{
  return risposta.json();
})
.then((dati)=>{
  dati.forEach((dato, i) => {
    console.log(dato);;
  });
})
.catch((err)=>{
  console.log(err);
})
