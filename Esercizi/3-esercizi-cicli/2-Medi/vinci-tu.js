/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
Due giocatori
Dado a sei facce
N munero di tiri da effettuare
punti per giocatore
Somma punti giocatore
Mostrare il vincitore

var g1='Mario', g2='Luigi';
var t=30;
var g1ScoreT=0
var g2ScoreT=0
for (var i = 1; i < t+1; i++) {
  var g1D6=Math.floor(Math.random()*(6))+1;
  var g2D6=Math.floor(Math.random()*(6))+1;
  g1ScoreT+=g1D6
  g2ScoreT+=g2D6

console.log(`ROUND ${i}:\n\n${g1}: ${g1D6}\n${g2}: ${g2D6}`);

if (g1D6>g2D6) {
  console.log(`\n${g1} vince per ${g1D6} a ${g2D6}!\n    `);
}
else if (g1D6<g2D6) {
  console.log(`\n${g2} vince per ${g2D6} a ${g1D6}!\n    `);
}
else if (g1D6==g2D6) {
  console.log(`\nPareggio, ${g1D6} a ${g2D6}!\n    `);
}
}

if (g1ScoreT>g2ScoreT) {
  console.log(`La partita la vince ${g1} per ${g1ScoreT} a ${g2ScoreT}!`);
}
else if (g1ScoreT<g2ScoreT) {
  console.log(`La partita la vince ${g2} per ${g2ScoreT} a ${g1ScoreT}!`);
}
else if (g1ScoreT==g2ScoreT) {
  console.log(`Incredibile, abbiamo un pareggio, ${g2ScoreT} per entrambi!`);
}

if ((g1ScoreT/2)>=g2ScoreT || (g2ScoreT/2)>=g1ScoreT) {
console.log(`Una vittoria schiacciante!`);
}
if (g1ScoreT==3 || g2ScoreT==3) {
console.log(`Un punteggio così basso non si vedeva da tempo!`);
}
