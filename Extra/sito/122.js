
/* -----------------------------------------
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){

  switch (xhr.readyState) {
    case 1: console.log('Istanza Creata');break;
    case 2: console.log(xhr.getAllResponseHeaders());break;
    case 3: console.log('Scaricamento dati');break;
    case 4: console.log('Operazione Completata');break;

  }

}
xhr.open('GET','file1.txt',true);
xhr.send();

// xhr.onload = function (){
//   console.log(xhr.responseText);
// }
// -----------------------------------------
*/
const xhr = new XMLHttpRequest();
xhr.open('GET','file1.txt',true);
xhr.send();
xhr.onprogress = function (){
  console.log('Scaricamento Dati');
};

xhr.onload = function (){
  switch (xhr.status) {
    case 200: console.log(xhr.responseText);break;
    case 404: console.log('Risorsa non trovata');break;
    case 500: console.log('Server Error');break;
  }
};
