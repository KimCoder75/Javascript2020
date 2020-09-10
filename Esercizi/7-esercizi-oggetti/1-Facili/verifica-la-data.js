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
//array contenente i giorni dei mesi
let days = [31,28,31,30,31,30,31,31,30,31,30,31];

let errore="La data non è valida!";
let dateV = {day:29,month:5,year:2000}
let bis="l'anno non è bisestile";

//Blocco di verifica anno bisestile
if(dateV.year%400==0){
  bisestile=true;
  }
else if(dateV.year%4==0 && dateV.year%100!=0){
  bisestile=true;
  }
if(bisestile){
days[1]=29;
bis="l'anno è bisestile";
}

//Blocco di verifica presenza errori di input
if((dateV.month>12) || (dateV.year<0) || (dateV.month==2 && dateV.day>days[1])){
  console.log(errore);//output errore inserimento
}
else if(dateV.day>days[dateV.month-1]){
  console.log(errore);//outupt errore inserimento
}
else{
  console.log(dateV.day,dateV.month,dateV.year,bis)};//Output
