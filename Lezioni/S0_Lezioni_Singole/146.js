/*
* Gestione delle eccezioni
*/
// 'use strict';

class RequestException extends Error {
  constructor(err){
    super(err.stato);
    this.name = 'RequestException';
    this.stato = err.stato;
    this.risorsa = err.risorsa;
  }

  get infoErroreRichiesta() {
    return `Errore ${this.name}\nStato: ${this.stato}\nRisorsa: ${this.risorsa}`;
  }
}

try {
  //richiesta di rete
  throw new RequestException({ stato: 'Not found', risorsa:'api/user'});
} catch(err){
  console.dir(err.infoErroreRichiesta);
}
