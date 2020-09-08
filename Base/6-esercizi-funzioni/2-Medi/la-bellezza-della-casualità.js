/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e
  restituisca un numero casuale compreso tra 0 e l'argomento passato.


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
let l = prompt("Inserisci un numero");
function passaRandom(n){
  var res = Math.floor(Math.random()*n+1);//Math.floor(Math.random() * (max - min + 1)) + min; Il max è incluso e il min è incluso
  return res;
}
console.log(+l);
var res1=passaRandom(+l)
console.log(res1);

/*
// codice creato
var a = [];
for (var i = 0; i < res1; i++) {
var n = (Math.floor(Math.random()*res1))
console.log(`Il numero estratto è: ${n}`);
  a.push(n);
}

// codice copiato
var result = { };
for(var i = 0; i < a.length; ++i) {
    if(!result[a[i]])
        result[a[i]] = 0;
    ++result[a[i]];
}
console.log(result);
*/
