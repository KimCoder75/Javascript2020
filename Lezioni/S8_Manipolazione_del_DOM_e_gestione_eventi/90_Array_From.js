let sectionDivInnerText=[],
    blocchi = document.getElementById('ElencoBlocchi').children,
    blocchiElenco = Array.from(blocchi);

    blocchiElenco.forEach((item, i) => {
        console.log(item.innerText);
        sectionDivInnerText.push(item.innerText);
        item.innerText=`Blocco con indice ${i}`;
        console.log(`l'innerText è stato cambiato da '${sectionDivInnerText[i]}' a '${item.innerText}'`)
    });
