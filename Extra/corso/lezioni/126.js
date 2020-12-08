//https://jsonplaceholder.typicode.com/
import httpRequest from './126httpRequest.js';

const urlBase = 'https://jsonplaceholder.typicode.com';

let post = httpRequest('GET', `${urlBase}/posts/1`, getPost);

function getPost(post){
  console.log(post);
  httpRequest('GET', `${urlBase}/posts/1/comments`,showComments);
};

function showComments(commenti){
  console.log(commenti);
}
