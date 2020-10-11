/*
* Ajax (Asynchronous Javascript And XML)
*
* XMLHttpRequest object (XHR)
*
*/

const xhr = new XMLHttpRequest();
xhr.open('GET','file1.txt', true);
xhr.send();
xhr.onload = function(){
  console.log(xhr.responseText);
}
