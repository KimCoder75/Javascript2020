/* Il metodo concat() restituisce un nuovo array costituito dall'array iniziale,
sul quale è stato invocato (joined array) e dagli array e/o valori passati come argomenti.

Sintassi:
let arrayConcatenato = arrayIniziale.concat(value1[, value2[, ...[, valueN]]])

N.B. Concat concatena gli elementi passati sempre alla fine dell'array sul quale è invocato,
non sarà quindi possibile inserire elementi in posizioni da noi definite,
cosa che vedremo con il metodo splice.
*/
const numeri = [1,2,3,4,5],
      a = "[10,20,30]",
      b = 12,
      c = `${b*100} è sicuramente maggiore di ${b}`,
      d = true,
      e = "Ciao",
      f = [10,20,30],
      f1 = 1.88*20*1.22;

const g = numeri.concat(a,b,c,d,e,f,f1);
g.definizione="Stiamo utilizzando il metodo concat su un'array."
console.table(numeri);
console.log(g);
