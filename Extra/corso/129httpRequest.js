//https://jsonplaceholder.typicode.com/
/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/
function httpRequest(type, url, resolve, reject){
  const xhr = new XMLHttpRequest();
  xhr.open(type, url, true);
  xhr.send();
  xhr.onload = function() {
    if(this.status === 200){
      resolve(this.responseText);
    } else {
      reject(this.responseText);
    }
  }
}
export default httpRequest;
