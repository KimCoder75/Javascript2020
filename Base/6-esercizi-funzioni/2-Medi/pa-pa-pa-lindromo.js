/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa
  e restituisca TRUE se è palindroma,
  FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").

  http://www.imparareaprogrammare.it
*/
/*
inserisci una frase o una parola
elimina punteggiatura e spazi vuoti
converti in array
restituisci la lunghezza dell'Array
porta tutto in minuscolo
se è dispari elimina il carattere centrale
dividi in due Array
fai il reverse della seconda
confronta le lettere
*/
var str = prompt("Inserisci un testo o una parola per vedere se è palindroma");
var tipo;
function palindroma(stringa){
const stringaC = stringa.replace(/\W/g, "").toLowerCase();
const stringaL = stringaC.length;
const med = (Math.floor(stringaL/2));
let count=med;
for (var i=0;i<med;i++) {
stringaC[i]==stringaC[stringaL-1-i]?count-=1:count;
};
count==0?tipo=`Il testo inserito è palindromo` :tipo=`Il testo inserito è ${stringa} non è palindromo.`;
return tipo;
};

console.log(palindroma(str));
