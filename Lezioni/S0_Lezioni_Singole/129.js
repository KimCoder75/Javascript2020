/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/
/*
  * Promise
*/

import httpRequest from './129httpRequest.js';

function request(type, url){
  return new Promise((resolve, reject) => {
    httpRequest(type, url, resolve, reject);
  })
}

const url = 'https://jsonplaceholder.typicode.com';

request('GET', `${url}/posts/1`).then((risp)=>{
  console.log(risp);
  return request('GET', `${url}/posts/1/comments`);
})
.then((risp)=>{
  console.log(risp);
})
.catch((err)=>{
  console.log(err);
})
