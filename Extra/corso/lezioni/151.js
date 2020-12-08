/*
Good Practices:
* definizioni variabili
* abbreviazioni
* destrutturazione
*/

let variabile1,
    variabile2,
    variabile3,
    palazzo = {
    piani: 3,
    mq : 240,
    colore : 'rosso',
    numeroCamere : 21
    },
    xyz = [18, 12, 16],
    calcolaVolume = ( [ x, y, z ] ) => {
      return x * y * z;
    },
    valore;


function descriviPalazzo( { piani, colore, numeroCamere, mq } ){
  return `Piani: ${piani}\nmq: ${mq}\nColore: ${colore}\nNumero di Camere:${numeroCamere}`
}

console.log(descriviPalazzo(palazzo));
console.log(calcolaVolume(xyz));

if (!valore) {
  console.log('Il valore non esiste');
} else {
  console.log('Il valore esiste ed è '+ valore );
}

var tipoSaluto, saluto = 'Salve';

tipoSaluto = ( saluto === 'Salve' ? 'Gentile' : 'Classico');
console.log(tipoSaluto);

function fn(nome = '') {
  let nomeIndicato;
  if (nome !==''){
    nomeIndicato = nome;
  } else {
    nomeIndicato = 'Nessuno';
  }
  return nomeIndicato;
}
console.log(fn('Marco'));

function fn2(nome = ''){
  let nomeIndicato = nome || 'Nessun Nome';
  return nomeIndicato;
}
console.log(fn2());

function fn3(nome = ''){
  let nomeIndicato = (nome) ? nome : 'Nessun Nome';
  return nomeIndicato;
}
console.log(fn3());
