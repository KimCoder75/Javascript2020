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
let days {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};
let errore=()=>"La data non è valida!";
let dateV = {day:29,month:2,year:2000};
if(dateV.year%400==0)
{bisestile=true};
else if(dateV.year%4==0 && dateV.year%100!=0)
{bisestile=true};
else
{bisestile=false};
(bisestile)?days[2]=29:days[2]=28;
if(dateV.month>12 || dateV.year<0 || (dateV.month==2 && dateV.day>days[2]))
{console.log(errore())};
else if(dateV.day>days[dateV.month])
{console.log(errore())};
else
{console.log(dateV.day,dateV.month,dateV.year)};
(bisestile)?console.log("L'anno è bisestile!"):console.log("L'anno non è bisestile!");
