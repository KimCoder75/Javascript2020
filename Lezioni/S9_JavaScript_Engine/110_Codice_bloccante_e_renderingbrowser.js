//Heap, Execution Stack, il codice bloccante crea problemi al 110_Codice_bloccante_e_rendering perch
//il monitor aggiorna le immagini ad una determinata frequenza, normalmente 60Hz
//quindi 60 volte ogni 1000 milli secondi
//1000/60 -> 100/6 = 16.6 ms
// ogni 16.6 millisecondi il monitor invia allo stack un'informazione di refresh
//se lo stack è impegnato, questa operazione non viene eseguita
// e l'immagine non esegue il refresh
// quindi il rendering non avviene correttamente
// e l'immagine va a scatti
// questo è il motivo per cui il codice
// bloccante da problemi al rendering
