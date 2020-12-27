/* console.log(Booking.sala.tavoli); //ricordarsi di accedere  alla proprietà
numero tavoli con sala["numero-tavoli"]
*/

const Booking ={}; // creo un oggetto vuoto

/* creo le proprietà accedendo al DOM tramite
document.getElementById('nome id')
*/
Booking.numeroPersoneW = document.getElementById('numero-persone-w');
Booking.numeroPersone = document.getElementById('numero-persone');
Booking.tavoloSelezionato = document.getElementById('tavolo-selezionato');
Booking.tavoliW = document.getElementById('tavoli-w');
Booking.messageStatus = document.getElementById('message-status');
Booking.campiForm = document.forms[0]; // aggiunto document form

/* creo una funzione asincrona
chiama il file sala.json e aspetta di averlo ricevuto correttamente
una volta caricato lo trasforma in un oggetto utilizzabile
utilizza l'oggetto importato per definire la proprietà sala
lo associa alla proprietà tavoli
esegue la funzione disponiTavoli
*/

(async function costruisciSala() {
	Booking.sala = await fetch('sala.json');
	Booking.sala = await Booking.sala.json();
	Booking.tavoli = Booking.sala.tavoli;
	disponiTavoli(Booking.tavoli);
})();
/*
definisco la funzione disponi tavoli
visto che booking.tavoli è un array di 8 elementi
lo itero in modo tale che per ogni elemento dell'array
accedendo al DOM crei un div
definisca una classe tavolo
in base al numero di posti aggiunga la classe x6 o x4
in base alla disponibilità del tavolo aggiunga la classe libero o occupato
imposti l'attributo classe al div
aggiunga al div un nodo testuale con il numero di tavolo
aggiunga il div creato alla sezione tavoli-w
*/

function disponiTavoli(tavoli) {
	tavoli.forEach((tavolo, i) => {

		let tavoloDOM = document.createElement('div'),
				classiTavolo = 'tavolo';

		classiTavolo += (tavolo.posti == 6) ? ' x6' : ' x4';
		classiTavolo += tavolo.occupato ? ' occupato' : ' libero';
		tavoloDOM.setAttribute('class', classiTavolo);

		tavoloDOM.appendChild(document.createTextNode(i+1));
		Booking.tavoliW.appendChild(tavoloDOM);

	});
}
Booking.numeroPersoneW.addEventListener('click', (e)=> {
	e.preventDefault();
	let numeroPersone = +Booking.numeroPersone.textContent;
	if(e.target.id === 'add' && numeroPersone < 40) {
		Booking.numeroPersone.textContent = numeroPersone + 1;
	} else if (e.target.id === 'sub' && numeroPersone > 1){
		Booking.numeroPersone.textContent = numeroPersone - 1;
	}
	// se l'id è sub && numero persone >1 numeroPersone-1
	// se l'id è add && numero persone <40 numeroPersone+1
});

Booking.tavoliW.addEventListener('click', (e)=>{
	let selezionato = +e.target.textContent;
	if (Booking.tavoli[selezionato-1].occupato) {
		// Booking.tavoloSelezionato.textContent = '-'
		Booking.messageStatus.textContent = `Il tavolo ${selezionato} è occupato`;
	} else {
		// Booking.messageStatus.textContent = ''; // imparare a creare testo vuoto
		Booking.tavoloSelezionato.textContent = selezionato;
	}
	// gestire l'errore generato dal click tra i tavoli
});

Booking.campiForm.addEventListener('submit', (e)=>{
	e.preventDefault(); //ripassare cosa serve prevenire il comportamento di default
	if (Booking.tavoloSelezionato.textContent == '-') {
		Booking.messageStatus.textContent = 'È necessario segnalare un tavolo';
		return;
	}
	sendBooking();
});

function sendBooking() {
	let bookingForm = new FormData();
	bookingForm.append('numero-persone', +Booking.numeroPersone.textContent);
	bookingForm.append('tavolo', +Booking.tavoloSelezionato.textContent);
	bookingForm.append('nome', Booking.campiForm.nome.value);
	bookingForm.append('email', Booking.campiForm.email.value);
	// fetch('bookingScript', {
	// 	body: BookingForm,
	// 	method: 'post'
	// });
	Booking.messageStatus.textContent = 'La prenotazione è andata a buon fine.';
	Booking.campiForm.reset();
}
