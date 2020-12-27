function cerca () {// Dichiarazione della funzione di nome cerca()

  if (document.all) {// Se il browser è Internet Explorer
    let finestra = window.open('X-am.html','nome','width=400,height=200');// Viene aperto in una finestra pop up di dimensioni 400 × 200 il file di nome "X-am.htm"
    finestra = window.focus;// La finestra viene aperta in primo piano: se ci sono altre finestre questa viene aperta sopra le altre.
    finestra.document.close();// Si comunica al browser che le istruzioni relative all'apertura della finestra sono terminate
  };// Parentesi di chiusura della selezione binaria (if)

  else if {
  document.getElementById('testoXam');// Altrimenti se il browser è Netscape, Mozilla o FireFox
  self.find();// Viene attivato il metodo che apre la finestra di ricerca propria di questi browsers
  };// Parentesi di chiusura di else if

  else {
    window.alert('Il tuo browser non supporta questo metodo')// Qualora il browser dell'utente non riconosca nessuno dei casi previsti, si riceve il messaggio: "Il tuo browser non supporta questo metodo"
  };

};// Parentesi di chiusura della funzione cerca()
