
console.log(1);
const xhr = new XMLHttpRequest();
xhr.open('GET','file1.txt',true);
xhr.send();
xhr.onload = function (){
  console.log(xhr.responseText);
}
console.log(2);
