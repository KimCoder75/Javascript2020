/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data e verifichi se è valida o meno.
  L'oggetto sarà composto da giorno, mese e anno (input a piacere).
  Esempio:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"
  http://www.imparareaprogrammare.it
*/
//ottimizzato con operatore ternario
//array contenente i giorni dei mesi
let days = [31,28,31,30,31,30,31,31,30,31,30,31],
    errore="La data non è valida!",
    dateV = { day:29, month:11, year:1604},
    bis="l'anno non è bisestile",
    cond;

//Blocco di verifica anno bisestile
if(dateV.year % 400 == 0 || ( dateV.year % 4 == 0 && dateV.year % 100 !=0 ) ) {
    days[1]=29;
    bis="l'anno è bisestile";
}

//Blocco di verifica presenza errori di input
cond = [
    dateV.month > 12,
    dateV.year < 0,
    dateV.month == 2 && dateV.day > days[1],
    dateV.day>days[dateV.month-1]
];
//Output
( cond.includes(true) )?console.log(errore):console.log(dateV.day,dateV.month,dateV.year,bis)
