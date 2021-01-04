/*jshint -W030,-W033,-W119,-W104*/
/*jshint expr:true*/
/*
* Gestione delle eccezioni
* la gestione dell'errore avviene solo per errori nella fase di runtime
* non nella fase di compilazione
* IN SINTESI:
* All'interno di try si inserisce il codice che può generare degli errori
* All'interno di catch si definisce come gestire l'errore
* Se l'errore è gestito, il codice non si blocca
* in caso di errore la constructor function ReferenceError crea un oggetto con tre proprietà:
* message, name e stack
* ed altre proprietà:
* lineNumber, columnNumber, fileName
* per sollevare un'eccezione si inserisce all'interno del try,
* throw new ReferenceError,
* creando una nuova istanza di ReferenceError
*/

try {
  // throw new TypeError('Eccezione da noi sollevata');
} catch (e) {
  // e.message ='Troppe Ricursioni';
  console.dir(e);
} finally {
  console.log(Object.getPrototypeOf(TypeError) === Error);
  console.log(Object.getPrototypeOf(ReferenceError) === Error);
  console.log(Object.getPrototypeOf(ReferenceError).prototype === Error.prototype);
  console.log(Error.prototype);
}

class RequestException extends Error {

  constructor(err){
    super(err.stato);
    this.name = 'RequestException';
    this.stato = err.stato;
    this.risorsa = err.risorsa;
  }
  get infoErroreRichiesta(){
    return `Errore: ${this.name}\nStato: ${this.stato}\nRisorsa: ${this.risorsa}`;
  }

}
try {
  //richiesta di RequestException
  throw new RequestException({stato:'Not Found', risorsa:'api/user'});
} catch (err) {
  console.log(err.infoErroreRichiesta);

} finally {

}
