const btn= document.getElementById('btn');
const sezione= document.getElementById('utentiSection');

btn.addEventListener('click', function(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','utenti.json',true);
  xhr.send();

  xhr.onload = function(){
    if(xhr.status===200){
      const utentiJSON = xhr.responseText;
      const utenti = JSON.parse(utentiJSON);
      console.log(utenti);
    }
  }

});
