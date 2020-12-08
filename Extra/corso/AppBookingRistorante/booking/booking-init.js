const BookingInit = {
    wrapperNumeroPersone: document.getElementById('numero-persone-w'),
    wrapperTavoli: document.getElementById('section-tavoli-w'),
    mostraInfoPrenotazione: document.getElementById('message-status'),
    indicazioneNumeroPersone: document.getElementById('numero-persone'),
    rowLength: 4,
    numeroPersone: 2,
    tavoliDaPrenotare: [],
    form: document.forms[0],
    capienzaMax: calcolaCapienzaSala,
    init: init
};

async function init() {
    BookingInit.sala = await fetch('./booking/prenotazioni.json');
    BookingInit.sala = await BookingInit.sala.json();
    BookingInit.tavoli = BookingInit.sala.tavoli;
    disponiTavoli(BookingInit.tavoli, 0, BookingInit.rowLength);
};

function calcolaCapienzaSala() {
    let capienza = 0;
    BookingInit.tavoli.forEach((tavolo) => {
        if(tavolo.libero) {
            capienza += tavolo.posti;
        }
    });
    return capienza;
}

function disponiTavoli(tavoli, start, end) {
    if (start >= BookingInit.tavoli.length) {
        return;
    }
    for (let i = start; i < end; i++) {
        if (i === start) {
            var wrapper = document.createElement('div');
            wrapper.className = 'tavoli-row-w';
        }
        tavoli[i] ? wrapper.appendChild(getTavolo(tavoli[i], i)) : '';
        if (i === end - 1) {
            BookingInit.wrapperTavoli.appendChild(wrapper);
        }
    }
    disponiTavoli(BookingInit.tavoli, end, end + BookingInit.rowLength);
}

function getTavolo(tavolo, i) {
    let classiTavolo = 'tavolo', tavoloDOM = document.createElement('div');
    tavoloDOM.appendChild(document.createTextNode(tavolo.numero));
    classiTavolo += tavolo.libero ? ' libero' : ' occupato';
    classiTavolo += tavolo.posti == 6 ? ' x6' : ' x4';
    tavoloDOM.setAttribute('class', classiTavolo);
    tavoloDOM.dataset.numero = tavolo.numero;
    tavoloDOM.dataset.index = i;
    return tavoloDOM;
}

export default BookingInit;
