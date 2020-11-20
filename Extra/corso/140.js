/*
* Esercitazione: Creazione utenti con nomi non duplicati
*/
const nomi = ['Simone', 'Sandro', 'Miriam', 'Bianca', 'Eleonora'],
      cognomi = ['Rossi', 'Del Greco', 'Dileo', 'Ferrari', 'Morelli'];

function *generaRandomUser(nomi, cognomi){
  while(nomi.length > 0){
    const nomeIndex = (Math.random()*nomi.length) | 0,
          cognomeIndex = (Math.random()*cognomi.length) | 0,
          nome = nomi[nomeIndex],
          cognome= cognomi[cognomeIndex];
          // console.log(nomeIndex,cognomeIndex,nome,cognome);

    nomi.splice(nomeIndex, 1);
    // console.log(nomi);
    cognomi.splice(cognomeIndex, 1);
    // console.log(cognomi);
    yield { nome, cognome };
  }
}

for(let user of generaRandomUser(nomi, cognomi)){
  console.log(user);
}
