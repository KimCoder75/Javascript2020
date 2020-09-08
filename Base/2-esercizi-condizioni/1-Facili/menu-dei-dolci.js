/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/
// console.log('MENU:\n1. Tiramisù\n2. Torta della nonna\n3. Cheesecake alla nutella\n4. Macedonia\n');
var dol =prompt('MENU:\n1. Tiramisù\n2. Torta della nonna\n3. Cheesecake alla nutella\n4. Macedonia\n\nChe dolce desidera?');
var dolci=parseInt(dol);
switch (dolci) {
  case 1:
  console.log(`${dolci}, Tiramisù, ottima scelta`);
  break;
  case 2:
  console.log(`${dolci}, Torta della nonna, sublime.`);
  break;
  case 3:
  console.log(`${dolci}, Cheesecake alla nutella, eccellente.`);
  break;
  case 4:
  console.log(`${dolci}, Macedonia, ottima scelta.`);
  break;
  default:
  console.log(`${dolci}? Mi dispiace: hai scelto un dolce non disponibile.`);
}
