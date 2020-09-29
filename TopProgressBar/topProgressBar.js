/*
 * Esercitazione: Progress Bar scorrimento documento

I mattoncini di questo progetto:

1) DOMContentLoaded

L'evento DOMContentLoaded si attiva quando il documento HTML iniziale è stato
completamente caricato e analizzato, senza attendere che i fogli di stile,
le immagini e i subframe finiscano di essere caricati.

2) document.documentElement
Restituisce il nodo html, è un riferimento al nodo dell'elemento radice del documento.

La proprietà documentElement viene utilizzata principalmente per calcolare la
dimensione dell'area client del browser.

3) scroll

L'evento scroll si attiva quando un elemento viene fatto scorrere,
solitamente si applica agli oggetti frame e window

4) html.clientHeight
Restituisce l'altezza dell'area client.

  html.clientWidth
  Restituisce la larghezza dell'area client.

5) scrollHeight

scrollHeight è l'altezza totale dell'elemento incluso il padding.

6) scrollTop

scrollTop è la distanza dalla parte superiore dell'elemento al suo primo elemento visibile
Quando il contenuto di un elemento non genera una barra di scorrimento verticale,
scrollTop è 0.

scroll100 = scrollHeight-clientHeight

((scroll100/scrollTop)*100)+"%"



*/





let PB = {};
document.addEventListener('DOMContentLoaded',()=>{
    PB.barra = document.getElementById('progress');
    PB.html = document.documentElement;
    PB.barra.style.width ='0%';
});

window.addEventListener('scroll', progressFn);

function progressFn(){
  const scroll100 = (PB.html.scrollHeight - PB.html.clientHeight);
  PB.barra.style.width = (+(((PB.html.scrollTop)*100)/scroll100).toFixed(2))+"%";
}
