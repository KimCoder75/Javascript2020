/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti: il giorno e il mese.
  La funzione deve restituire a quale giorno dell'anno corrisponde (compreso tra 1 e 366).

  Esempio:
    Input : giorno = 5, mese = 2
    Output:
            36

  Consigli:
  Puoi definire un array con i giorni di ogni mese e ciclarlo.


  http://www.imparareaprogrammare.it
*/
let meseS=prompt("Inserisci un mese sotto forma di numero","da 1 a 12");
let mese = parseInt(meseS);
console.clear();
let giornoS=prompt("L'anno è bisestile, inserisci un giorno sotto forma di numero, evita giorni impossibili come il 30 o il 31 febbraio.","xx");
let giorno=parseInt(giornoS);
let giorniMese=[0,31,29,31,30,31,30,31,31,30,31,30,31];
let totale;
let count=0;
function contaGiorni(g,m) {

        for (let i = 0; i < m; i++) {
        count+=giorniMese[i]
                                      }
        totale=(count+g);
        var tot = (`il ${giorno}/${mese} è il ${totale}esimo giorno di un anno bisestile.`);
        return tot;
                          }
console.log(contaGiorni(giorno,mese));
