/*
 * default
*/
import UtenteBase from './70b.js';

export default

class User extends UtenteBase {

  constructor(nome, anni){
    super();
    this.nome = nome;
    this.anni = anni;
  }

  descrivimi(){
  return `Ciao, mi chiamo ${this.nome} e ho ${this.anni} anni.`
  }

}
