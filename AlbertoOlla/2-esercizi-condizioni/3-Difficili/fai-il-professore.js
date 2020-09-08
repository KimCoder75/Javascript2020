/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/
// variante con if
var v = Math.floor(Math.random()*(30))+1;
if (v==30) {
  console.log(`Hai preso ${v}, eccellente!`);
}
else if (27<=v && v<=29) {
  console.log(`Hai preso ${v}, ottimo!`);
}
else if (24<=v && v<27) {
  console.log(`Hai preso ${v}, distinto!`);
}
else if (21<=v && v<24) {
  console.log(`Hai preso ${v}, buono!`);
}
else if (18<=v && v<21) {
  console.log(`Hai preso ${v}, sufficiente!`);
}
else if(v<18) {
  console.log(`Hai preso ${v}, insufficiente!`);
}


// variante con switch
var n = Math.floor(Math.random()*(35))+1;
switch (n) {
    case 30:
    console.log(`Hai preso ${n}, eccellente!`);
    break;
    case 29:
    case 28:
    case 27:
    console.log(`Hai preso ${n}, ottimo!`);
    break;
    case 26:
    case 25:
    case 24:
    console.log(`Hai preso ${n}, distinto!`);
    break;
    case 23:
    case 22:
    case 21:
    console.log(`Hai preso ${n}, buono!`);
    break;
    case 20:
    case 19:
    case 18:
    console.log(`Hai preso ${n}, sufficiente!`);
    break;
    default:
    if (n<18) {
        console.log(`Hai preso ${n}, insufficiente!`);
    }
    else if (n>30)
    console.log(`Al test ha totalizzato ${n} punti, più del punteggio previsto, 30 e lode!`);
}
