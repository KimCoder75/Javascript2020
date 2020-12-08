/*
* Ajax (Asynchronous Javascript And XML)
*
* XMLHttpRequest object (XHR)
*
* onreadystatechange
* readyState

*/

// const xhr = new XMLHttpRequest();
// console.log(xhr.readyState);
//
// xhr.open('GET','file1.txt', true);
// console.log(xhr.readyState);
// ------------------------------------------

// const xhr = new XMLHttpRequest();
//
// xhr.onreadystatechange = function () {
//   switch (xhr.readyState) {
//     case 1: console.log('Istanza creata');break;
//     case 2: console.log(xhr.getAllResponseHeaders());break;
//     case 3: console.log('Scaricamento dati');break;
//     case 4: console.log('Operazione completata');break;
//   }
// }
// xhr.open('GET','file1.txt', true);
// xhr.send();
// ------------------------------------------

const xhr = new XMLHttpRequest();

xhr.open('GET','xam.txt', true);

xhr.send();
xhr.onprogress = function (){
  console.log('Scaricamento dati');
}

xhr.onload = function(){

  if (xhr.status===200) {
    str = JSON.stringify(xhr.responseText)
    console.log(xhr.responseText);
  } else if(xhr.status===404){
    console.log('File non trovato');
  } else if(xhr.status===500){
    console.log('Server error');
  }
}
