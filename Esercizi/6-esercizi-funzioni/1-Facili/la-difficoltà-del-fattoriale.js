/*
  La difficoltà del fattoriale
  Scrivi una funnuIntione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  http://www.imparareaprogrammare.it
*/

var arr = [];
var nu=prompt("Calcolo fattoriale: Inserisci un numero.","Inserisci n per avere n!")
var nuInt=parseInt(nu);
  function fattoriale(n)
  {
    var f=1; // inizializzo f a 1 perchè dovrà essere moltiplicata per i valori all'interno dei ciclo
    var nA=0; // variabile utile per definire gli indici della matrice
    for(i=n;i>0;i--)
    {
       f*=i;
       arr[nA] = i; // inserisco i mumeri all'inteno della matrice;
       nA+=1;
    }
    return(f)
  }
var result=fattoriale(nuInt);
var rString = arr.join(" x "); // trasforma la matrice in stringa separata dal simbolo x
console.clear();
console.log(`${nuInt}! = ${rString} = ${result}`);
