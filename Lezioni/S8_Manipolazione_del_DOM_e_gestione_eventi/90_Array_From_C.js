let blocchi = document.getElementById('ElencoBlocchi').children,
     blocchiElenco = Array.from(blocchi);

blocchiElenco.forEach((item, i) => {
    let oldContent = item.innerText,
        newContent = item.innerText = `Blocco con indice ${i}`;
    console.log(`l'innerText è stato cambiato da '${oldContent}' a '${newContent}'`);
});
