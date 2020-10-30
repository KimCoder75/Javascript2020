const btn = document.getElementById('btn'),
      sezione = document.getElementById('utentiSection');

btn.addEventListener('click', function() {

  const xhr = new XMLHttpRequest();
  xhr.open('GET','utenti.json', true);
  xhr.send();

  xhr.onload = function (){

    if (xhr.status===200 && xhr.readyState ===4) {
        console.log('');
        let utentiJSON = xhr.responseText,
            utenti = JSON.parse(utentiJSON);
        console.clear();
        console.log(utentiJSON);
        console.log(utenti);
        showUtenti(utenti);
    }
  }
});

function showUtenti(utenti){
  sezione.textContent='';
  if (utenti.length > 0) {
    utenti.forEach((utente, i) => {
      showUtente(utente);
    });
  } else{
    sezione.textContent ='Nessun utente da mostrare';
    }
};

function showUtente(utente) {
  let newUserDiv = document.createElement('div');
  newUserDiv.style.border = "1 px solid #999";
  newUserDiv.style.marginTop = "10px";
  newUserDiv.style.padding = "10px";
  newUserDiv.innerHTML = `
  nome: ${utente.nome}<br>
  anni: ${utente.anni}<br>
  lavoro: ${utente.lavoro}<br>
  `;
  sezione.appendChild(newUserDiv);

};
