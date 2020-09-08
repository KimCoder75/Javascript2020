/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
        ...


  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.

  http://www.imparareaprogrammare.it
*/
/*

Meta programma:
1) Definisco un'array g7 con i giorni della settimana.
2) Creo un'array g35 con 35 elementi concatenado g7 4 volte se stessa.
3) Creo un'array g31 contenente i primi 31 elementi di g35.
4) Creo un ciclo da 0 a 30 che mostra in console il giorno e il numero utilizzando gli indici di g31 e numeri del ciclo+1.

Note:
a) il ciclo parte da 0 e arriva a 30, che è perfetto per gli indici di g31 ma per non va bene per i numeri, per rappresentare
i numeri ho utilizzato i+1 in modo da avere una lista che partisse da 1 e arrivasse a 31.
b) in questo caso l'utilizzo dei metodi slice e splice sono equivalenti perchè restituiscono entrambi i primi 31 elementi di g35,
se avessimo avuto bisogno di lavorare ancora sulla stringa originaria g35 avremmo dovuto utilizzare solo slice.

*/
// variante con if
for (var g = 0; g < 31; g++) {
  if (g==0 || g==7 || g==14 || g==21 || g==28){
    console.log(`Lun ${g+1}`);
  }
    else if (g==1 || g==8 || g==15 || g==22 || g==29){
      console.log(`Mar ${g+1}`);
    }
    else if (g==2 || g==9 || g==16 || g==23 || g==30){
      console.log(`Mer ${g+1}`);
    }

    else if (g==3 || g==10 || g==17 || g==24 || g==31){
      console.log(`Gio ${g+1}`);
    }

    else if (g==4 || g==11 || g==18 || g==25){
      console.log(`Ven ${g+1}`);
    }

    else if (g==5 || g==12 || g==19 || g==26){
      console.log(`Sab ${g+1}`);
    }

    else{console.log(`Dom ${g+1}`);}
}
// variante con switch case
for (var h = 0; h < 31; h++) {
switch (h) {
  case 0:
  case 7:
  case 14:
  case 21:
  case 28:
  console.log(`Lun ${h+1}`);
  break;
  case 1:
  case 8:
  case 15:
  case 22:
  case 29:
  console.log(`Mar ${h+1}`);
  break;
  case 2:
  case 9:
  case 16:
  case 23:
  case 30:
  console.log(`Mer ${h+1}`);
  break;
  case 3:
  case 10:
  case 17:
  case 24:
  case 31:
  console.log(`Gio ${h+1}`);
  break;
  case 4:
  case 11:
  case 18:
  case 25:
  console.log(`Ven ${h+1}`);
  break;
  case 5:
  case 12:
  case 19:
  case 26:
  console.log(`Sab ${h+1}`);
  break;
  default:
  console.log(`Dom ${h+1}`);
    }
}

// variante con concatenamento e slice

const g7=['Lun','Mar','Mer','Gio','Ven','Sab','Dom']; //crea un'array con i giorni della settimana.
  var g35=g7.concat(g7,g7,g7,g7);//crea un'array concatenato lungo 5 volte l'array originale, 35 elementi (7 giorni * 5 volte).
  var g31=g35.slice(0,31); //crea una nuava array chiamata g31 contenente i primi 31 elementi di g35 (scegliendoli partendo dall'indice 0 contando 31 numeri) e mantiene la stringa g35 inalterata.
for (var i = 0; i < 31; i++) { //inizia un ciclo da 0 a 30 mostrando l'argomento dell'array g31 dall'indice 0 all'indice 30 insieme a numeri che vanno da 1 (i+1) a 31 (30+1)
console.log(`${g31[i]} ${(i+1)}`);}

//variante con concatenamento array.length e ciclo

const g7=['Lun','Mar','Mer','Gio','Ven','Sab','Dom']; //crea un'array con i giorni della settimana.
  var g35=g7.concat(g7,g7,g7,g7);//crea un'array concatenato lungo 5 volte l'array originale, 35 elementi (7 giorni * 5 volte).
  var g31=g35 // imposta imposta g31 uguale a g35
  g31.length=31; // imponi la lunghezza di g31 a 31 elementi
for (var i = 0; i < 31; i++) { //inizia un ciclo da 0 a 30 mostrando l'argomento dell'array g31 dall'indice 0 all'indice 30 insieme a numeri che vanno da 1 (i+1) a 31 (30+1)
console.log(`${g31[i]} ${(i+1)}`);}

//variante con con 3 cicli
const gi7=['Lun','Mar','Mer','Gio','Ven','Sab','Dom'];
console.log(gi7);
var gi28=[];
for (var g = 0; g < 4; g++) { // per quattro volte
  for (var i = 0; i <gi7.length; i++) { // cicla l'array gi7
gi28.push(gi7[i]) //ad ogni ciclo aggiungi l'elemento all'array vuoto g28
  }
}
console.log(gi28);
var gi31=gi28
for (var i = 0; i < 3; i++) { // per 3 volte
gi31.push(gi7[i]) // aggiungi a g31 i giorni mancanti per arrivare a 31
}
console.log(gi31);
