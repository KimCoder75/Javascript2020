
// Si introduce codice javascript
let conta = 0,// Si inizializza la variabile di nome volte che serve per memorizzare il numero di occorrenze della parola cercata nel documento.
  trovato = false,// Si inizializza la variabile booleana di nome trovato che diventerà vera qualora la parola cercata si trovi nel documento.
  base='';// Si inizializza la variabile di nome base che serve per memorizzare l'intervallo di testo per la ricerca.

// Si dichiara la funzione inizia() che crea un intervallo di testo (TextRange) coincidente con tutto il contenuto testuale del corpo del documento dal quale proveniamo (opener) e lo memorizza nella variabile base.
function inizia() {
  base = opener.document.body.createTextRange();
};

// Si introduce la funzione trova
function trova() {
  if (document.MioForm.testo.value == '') {
    alert('Nulla da cercare!');
    return;
};// Se non è stata inserita alcuna stringa della casella di testo del form viene generato il messaggio: "Nulla da cercare!"

if (volte==0) {
  inizia();
};// Se volte=0, cioè se la funzione trova è stata attivata per la prima volta, si chiama la funzione inizia
trovato = base.findText(document.MioForm.testo.value);// Il metodo find.Text permette di ricercare la stringa chiusa in parentesi. Se questa stringa viene trovata la variabile trovato diventa vera, altrimenti resta falsa come la avevamo posta prima.
// Nel momento in cui si usa il metodo find.Text, l'intervallo di testo, che inizialmente avevamo esteso a tutto il documento, automaticamente si restringe alla sola stringa cercata.
// Se la variabile trovato è vera
if (trovato) {
  base.findText(document.MioForm.testo.value);// Come spiegato prima, l'intervallo di testo viene ora ristretto alla stringa cercata.
  base.select();// La stringa appare selezionata
  base.scrollIntoView();// La stringa trovata viene visualizzata all'inizio o alla base della pagina, e quindi il testo viene fatto scorrere. In parentesi può essere aggiunta una variabile booleana che se vera, visualizza la parola all'inizio della pagina, se falsa, alla base. Di default la parola viene visualizzata nella parte alta della pagina.
  volte++;// la variabile volte viene incrementata di 1
  base.moveStart("character", 1);// L'inizio dell'intervallo di testo viene spostato avanti di un carattere, mentre il termine coincide con il termine dell'intervallo precedente. In questo modo il nuovo intervallo di ricerca letierà fra il carattere subito dopo la stringa trovata e la fine del documento.
  base.moveEnd("textedit");
}

// altrimenti (la variabile trovato è falsa)
else {
  if (volte === 0){
alert(document.MioForm.testo.value + "non è stato trovato in questa pagina.");// Se volte è ancora uguale a zero, si riceve l'avviso che la parola cercata non è stata trovata
  }

  else{
alert(document.MioForm.testo.value +' è stato trovato '+volte+' volte in questa pagina.');// Questo else riguarda l'evento: "volte non è zero e trovato è falso". In questo caso viene visualizzato il messaggio che contiene il numero di volte in cui la stringa è stata trovata.
  volte=0;// Si pone nuovamente volte uguale a zero per una nuova ricerca
  };

};

};// Chiusura function
