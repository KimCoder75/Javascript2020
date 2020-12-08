import Booking from './booking-init.js';

function controllaSelezione(selezionato) {
    let numeroPostiInTavoliSelezionati = 0,
            infoControllo = {stato: false, msg: ''};
    if (!Booking.tavoli[selezionato].libero) {
        infoControllo.msg = 'Il tavolo selezionato non è libero.';
        return infoControllo;
    }
    if (Booking.tavoliDaPrenotare.length < 1) {
        infoControllo.stato = true;
        return infoControllo;
    }
    Booking.tavoliDaPrenotare.forEach((tavolo, i) => {
        numeroPostiInTavoliSelezionati += Booking.tavoli[tavolo].posti;
    });
    if (numeroPostiInTavoliSelezionati >= Booking.numeroPersone) {
        infoControllo.msg = `I tavoli selezionati possono già ospitare `
        + `${Booking.numeroPersone} persone.`;
        return infoControllo;
    }
    infoControllo.stato = true;
    return infoControllo;
}

function sendBooking() {
    let bookingForm = new FormData();
    bookingForm.append('numero-persone', Booking.numeroPersone);
    bookingForm.append('tavoli-da-prenotare', Booking.tavoliDaPrenotare);
    bookingForm.append('nome', Booking.form.nome.value);
    bookingForm.append('email', Booking.form.email.value);
    /*fetch("bookingScript.php", {
     body: bookingForm,
     method: "post"
     });*/
    //supponiamo che sia andato tutto a buon fine
    Booking.mostraInfoPrenotazione.textContent = 'Prenotazione effettuata con successo';
    Booking.form.reset();
}

Booking.wrapperTavoli.addEventListener('click', (e) => {
    let indiceArrayTavoloSelezionato = +e.target.dataset.index, statoSelezione, index;
    if (e.target.classList.contains('selezionato')) {
        e.target.classList.remove('selezionato');
        index = Booking.tavoliDaPrenotare.indexOf(indiceArrayTavoloSelezionato);
        Booking.tavoliDaPrenotare.splice(index, 1);
        return;
    }    
    statoSelezione = controllaSelezione(indiceArrayTavoloSelezionato);
    if (statoSelezione.stato) {
        Booking.tavoliDaPrenotare.push(indiceArrayTavoloSelezionato);
        e.target.classList.add('selezionato');
    } else {
        Booking.mostraInfoPrenotazione.textContent = `${statoSelezione.msg}`;
    }
});

Booking.wrapperNumeroPersone.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id === 'sub' && Booking.numeroPersone > 1) {        
        Booking.indicazioneNumeroPersone.textContent = --Booking.numeroPersone;
    } else if (e.target.id === 'add' && Booking.numeroPersone < Booking.capienzaMax()) {
        Booking.indicazioneNumeroPersone.textContent = ++Booking.numeroPersone;
    }
});

Booking.form.addEventListener('submit', (e) => {
    e.preventDefault();    
    if (Booking.tavoliDaPrenotare.length < 1) {
        Booking.mostraInfoPrenotazione.textContent = 'È necessario selezionare un tavolo.';
        return;
    }
    sendBooking();
});

export default Booking.init;