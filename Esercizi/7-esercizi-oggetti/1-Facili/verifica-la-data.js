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


/*
parti dall'anno e verifica se è bisestile
Per vedere se un anno è bisestile dobbiamo dividerlo per 400; 
se è divisibile allora è sicuramente un anno bisestile; 
altrimenti saranno bisestili solo quegli anni che si possono dividere per 4 ma non per 100. 


è divisibile per 400?
se sì bisestile=true
è divisibile per 4 e non per 100
se sì bisestile=true

*/




/*
function errore(){
return "La data non è valida!"
}*/

let errore=()=>"La data non è valida!"
let dateV = {day:18,month:19,year:2025}
if(dateV.month>12){console.log(errore())};
if(dateV.year%400==0){
bisestile=true}
else if(dateV.year%4==0 && dateV.year%100!=0){
bisestile=true}else{bisestile=false}
(bisestile)?febbraio=29:febbraio=28;
if(dateV.month=2 && dateV.day>febbraio){
console.log(errore())
}

//inserire la parte relativa al giorno ed al mese
