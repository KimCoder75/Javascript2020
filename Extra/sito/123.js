const btn = document.getElementById('btn'),
      sezione = document.getElementById('utentiSection');

btn.addEventListener('click', function() {

  const xhr = new XMLHttpRequest();
  // let valoreRandomUnico = Math.random();
  // xhr.open('GET','utenti.json?v=valoreRandomUnico', true);
  xhr.open('GET','utenti.json', true);
  xhr.setRequestHeader('Cache-Control', 'no-cache');
  xhr.send();

  xhr.onload = function (){

    if (xhr.status===200 && xhr.readyState === 4) {
        let utentiJSON = xhr.responseText,
            utenti = JSON.parse(utentiJSON);
        console.clear();
        // console.log(valoreRandomUnico);
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
  newUserDiv.style.border = "1px solid #999";
  newUserDiv.style.marginTop = "10px";
  newUserDiv.style.padding = "10px";
  newUserDiv.innerHTML = `
  nome: ${utente.nome}<br>
  anni: ${utente.anni}<br>
  lavoro: ${utente.lavoro}<br>
  `;
  sezione.appendChild(newUserDiv);

};
