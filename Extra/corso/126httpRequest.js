//https://jsonplaceholder.typicode.com/
function httpRequest(type, url, callback){
  const xhr = new XMLHttpRequest();
  xhr.open(type, url, true);
  xhr.send();
  xhr.onload = function() {
    if(this.status === 200){
      callback(this.responseText);
    }
  }
}

export default httpRequest;
