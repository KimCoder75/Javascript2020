/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/

//Math.floor(Math.random() * (max - min + 1)) + min; Il max è incluso e il min è incluso
var num=(Math.floor(Math.random() * (13 - 0 + 1)) + 0);
var res1="FALSE";
var verifica= function numeri(n) {
if (n>=1 && n<=7) {
  res1="TRUE";
}
}
console.clear();
console.log(`Il numero uscito è ${num}`);
verifica(num);
// console.log(res1);
var giorni=function gi(g){
if (res1==="TRUE") {
switch (num) {
  case 1:
    console.log("Lunedì");
  break;
  case 2:
    console.log("Martedì");
  break;
  case 3:
    console.log("Mercoledì");
  break;
  case 4:
    console.log("Giovedì");
  break;
  case 5:
    console.log("Venerdì");
  break;
  case 6:
    console.log("Sabato");
  break;
  case 7:
    console.log("Domenica");
  break;
  default:

}

}
else {
    console.log("Peccato, non posso indovinare il giorno.");
}
}
giorni(res1);

//versione 2 13/08/2020
//Math.floor(Math.random() * (max - min + 1)) + min; Il max è incluso e il min è incluso
let num=(Math.floor(Math.random() * (13 - 0 + 1)) + 0);
let res=false;
console.clear();
let verifica= function numeri(n) {
if (n>=1 && n<=7) {
  res=true;
  return(res)
                  }
                                  }

console.log(`Il numero uscito è ${num}`);
verifica(num);

let giorni=function gi(g){

if (res==true) {

      switch (num) {
        case 1:console.log("Lunedì");break;
        case 2:console.log("Martedì");break;
        case 3:console.log("Mercoledì");break;
        case 4:console.log("Giovedì");break;
        case 5:console.log("Venerdì");break;
        case 6:console.log("Sabato");break;
        case 7:console.log("Domenica");break;
                    }

                }
else {
    console.log("Peccato, non posso indovinare il giorno.");
      }
                          }
giorni(res);
