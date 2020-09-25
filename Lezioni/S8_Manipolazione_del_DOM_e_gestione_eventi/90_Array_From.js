// let sectionDivInnerText=[],
let blocchi = document.getElementById('ElencoBlocchi').children,
    blocchiElenco = Array.from(blocchi);

blocchiElenco.forEach((item, i) => {
    // console.log(item.innerText);
    // sectionDivInnerText.push(item.innerText);
    let vecchioContenuto = item.innerText,
        nuovoContenuto = (item.innerText = `Blocco con indice ${i}`);
    console.log(`${vecchioContenuto}
l'innerText è stato cambiato da '${vecchioContenuto}' a '${nuovoContenuto}'`);
    });
