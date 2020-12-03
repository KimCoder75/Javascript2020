/*
 * Esercitazione: Progress Bar scorrimento documento

I mattoncini di questo progetto:

1) DOMContentLoaded

L'evento DOMContentLoaded si attiva quando il documento HTML iniziale è stato
completamente caricato e analizzato, senza attendere che i fogli di stile,
le immagini e i subframe finiscano di essere caricati.

2) document.documentElement
Restituisce tutti gli elementi di document, è un riferimento al nodo dell'elemento radice del documento.

3) scroll

L'evento scroll si attiva quando un elemento viene fatto scorrere,
solitamente si applica agli oggetti frame e window

4) document.documentElement.clientHeight
Restituisce l'altezza visibile del client.

  document.documentElement.clientWidth
  Restituisce la larghezza visibile del client.

5) scrollHeight

scrollHeight è l'altezza totale dell'elemento incluso il padding,
in buona sostanza la pagina completa:
parte visibile = clientHeight +
parte non visibile: scrollHeight-clientHeight

6) scrollTop

scrollTop è la distanza dalla parte superiore dell'elemento al suo primo elemento visibile
Quando il contenuto di un elemento non genera una barra di scorrimento verticale,
scrollTop è 0.

scroll100 = scrollHeight-clientHeight

((scroll100/scrollTop)*100)+"%"



*/

let PB = {};
document.addEventListener('DOMContentLoaded', () => {
    PB.barra = document.getElementById('progress');
    PB.barra.style.width = "0%";
});

window.addEventListener('scroll', progressFn);
function progressFn() {
	let scrollHeight, clientHeight, scrollTop;
	( { scrollHeight, clientHeight, scrollTop } = document.documentElement)
  const scroll100 = (scrollHeight - clientHeight);
  let rapporto = (scrollTop/scroll100),
      rapportoFixed =+(rapporto*100).toFixed(2),
			pagina = Math.floor(scrollTop/clientHeight);


  console.clear();
  console.log(`scrollHeight: ${scrollHeight}`);
  console.log(`clientHeight: ${clientHeight}`);
  console.log(`scroll100: ${scroll100}`);
  console.log(`scrollTop: ${scrollTop}`);
  console.log(`rapporto: ${rapportoFixed}%`);
	console.log(`rapporto: ${scrollTop/clientHeight}`);
	console.log(`rapporto: ${pagina}`);

  PB.barra.style.width = `${rapportoFixed}%`;
};
