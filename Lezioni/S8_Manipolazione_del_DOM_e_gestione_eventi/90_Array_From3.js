

let blocchi = document.getElementById('ElencoBlocchi').childNodes

blocchi.forEach((item, i) => {
    let vecchioContenuto = item.textContent,
        nuovoContenuto = (item.textContent = `Blocco con indice ${i}`);
    console.log(`${vecchioContenuto}
il textContent è stato cambiato da '${vecchioContenuto}' a '${nuovoContenuto}'`);
});

    // let blocchi = document.getElementById('ElencoBlocchi').childNodes,
    //     blocchiElenco = Array.from(blocchi);
    //
    // blocchi.forEach((item, i) => {
    //     console.log(item);
    //     });
