const btn = document.getElementById('btn'),
      sezione = document.getElementById('utentiSection');

btn.addEventListener('click', function(){

  const xhr = new XMLHttpRequest();
  xhr.open('GET','utenti.json',true);
  xhr.send();

  xhr.onload = function (){

    if (xhr.status===200) {
        console.log('');
        const utentiJSON = xhr.responseText;
        const utenti = JSON.parse(utentiJSON);
        showUtenti(utenti);
    }

  }

});

function showUtenti(utenti){

  if (utenti.lenght >0) {
    utenti.forEach((utente, i) => {
      showUtente(utente);
    });
  }

  else {
    sezione.textContent ='Nessun utente da mostrare';
  }
};
