/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0


  http://www.imparareaprogrammare.it
*/
var numero=prompt("Inserici un numero per iniziare il conto alla rovescia","Inserisci un numero");
console.clear();
var n=parseInt(numero);

function ContoAllaRovescia(n) {

        for (var i = n-1; i > -1; i--) {
          console.log(i);
        }
                              }

ContoAllaRovescia(n);
