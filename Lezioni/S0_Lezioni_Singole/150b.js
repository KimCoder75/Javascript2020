// Constructor function che genera utenti

function User( nome, cognome, isFakeUser = false) {
  this.nome = nome;
  this.cognome = cognome;
  this.isFakeUser = isFakeUser;
}

function getFakeUser() {

  const nomi = ['Mara', 'Dario', 'Alessio', 'Miriam', 'Luca'],
        cognomi = ['Rossi', 'Bianco', 'Greco', 'Delia', 'Deluna'];

  return {
    nome : nomi[Math.random()* nomi.length | 0],
    cognome : cognomi[Math.random()* cognomi.length | 0]
  };

}

function createFakeUser(numeroUtentiFakeDaCreare) {

  let fakeUser = [],
      nome,
      cognome;

  for ( let i = 0; i < numeroUtentiFakeDaCreare; i++) {

    ({ nome, cognome } = getFakeUser());
    fakeUser.push( new User( nome, cognome, true) );

  }
  return fakeUser;
};

let fakeUser = createFakeUser(5);
console.table(fakeUser);
