/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/
/*
  * API Fetch per richiedere http
*/

import httpRequest from './130httpRequest.js';

function request(type, url){
  return new Promise((resolve, reject) => {
    httpRequest(type, url, resolve, reject);
  });
}

const f1 = request ('GET', '130f1.txt');
const f2 = request ('GET', '130f2.txt');

Promise.all([f1,f2])
.then((risposte)=>{
  risposte.forEach((risposta, i) => {
    console.log(risposta);
  });
  ;
})
.catch((err)=>{
  console.log(err);
})
