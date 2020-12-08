//https://jsonplaceholder.typicode.com/
/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/
function httpRequest(type, url, resolve, reject){
  const xhr = new XMLHttpRequest();
  xhr.open(type, url, true);
  xhr.setRequestHeader('Cache-Control', 'no-cache');
  xhr.send();
  xhr.onload = function() {
    if(this.status === 200){
      resolve(this.responseText);
    } else {
      reject(errorInfo(this));
    }
  }
}

function errorInfo(xhr){
  return `Errore in ${xhr.responseURL}
  Stato: ${xhr.status}
  Informazioni: ${xhr.statusText}`;
}
export default httpRequest;
