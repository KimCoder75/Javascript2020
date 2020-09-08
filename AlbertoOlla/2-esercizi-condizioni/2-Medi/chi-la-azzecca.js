/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/
const pl1 = 15, pl2 = 9;
var rdnN = 3 //Math.floor(Math.random()*(100-1)+1);
var risPl1 = Math.abs(rdnN-pl1);
var risPl2 = Math.abs(rdnN-pl2);
switch (rdnN) {
  case 1:
  rdnN==pl1;
  console.log(`Il numero estratto è ${rdnN}, il giocatore 1 ha vinto!`);
    break;
  case 2:
  rdnN==pl2;
  console.log(`Il numero estratto è ${rdnN}, il giocatore 2 ha vinto!`);
      break;
  default:
    console.log(`Il numero estratto è ${rdnN}, nessuno dei due giocatori ha vinto!`);
    if (risPl1<risPl2) {
      console.log(`Il giocatore 1 si è avvicinato di più, gli mancavano solo ${risPl1} numeri rispetto ai ${risPl2} del giocatore 2.`);
    }
        else {
          console.log(`Il giocatore 2 si è avvicinato di più, gli mancavano solo ${risPl2} numeri rispetto ai ${risPl1} del giocatore 1.`);
        }
    }



  //provare più avanti a fare la tombola creando cartelle con matrici bidimensionali
