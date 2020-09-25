/*
// rimosso let sectionDivInnerText=[],
let blocchi = document.getElementById('ElencoBlocchi').children,
    blocchiElenco = Array.from(blocchi);

blocchiElenco.forEach((item, i) => {
    // rimosso console.log(item.innerText);
    // rimosso sectionDivInnerText.push(item.innerText);
    let vecchioContenuto = item.innerText,
        nuovoContenuto = (item.innerText = `Blocco con indice ${i}`);
    console.log(`${vecchioContenuto}
l'innerText è stato cambiato da '${vecchioContenuto}' a '${nuovoContenuto}'`);
}); */

    let blocchi = document.getElementById('ElencoBlocchi').childNodes,
        blocchiElenco = Array.from(blocchi);

    blocchi.forEach((item, i) => {
        console.log(item);
        });
