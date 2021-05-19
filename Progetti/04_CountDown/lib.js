const indicatori = document.querySelectorAll('#time span'),
      scadenza = new Date(2021, 5, 8, 16, 30, 0),
      ms_scadenza = scadenza.getTime(),
      ms_in_giorno = (24*60*60*1000),
      ms_in_ora = (60*60*1000),
      ms_in_minuto = (60*1000);

function countdown(){
  const data_corrente = new Date(),
        ms_corrente = data_corrente.getTime(),
        ms_rimanenti = ms_scadenza - ms_corrente;
  let giorni = ~~(ms_rimanenti / ms_in_giorno),
      ore = ~~((ms_rimanenti % ms_in_giorno ) / ms_in_ora),
      minuti = ~~((ms_rimanenti % ms_in_ora) / ms_in_minuto),
      secondi = ~~((ms_rimanenti % ms_in_minuto) / 1000);
  let time = [giorni, ore, minuti, secondi];

  if(ms_rimanenti <= 0){
    clearInterval(contdownInterval);
    return;
  }

  indicatori.forEach((span, index) => {
    span.textContent = time[index];

  });


}
const contdownInterval = setInterval(countdown, 1000);
countdown();
