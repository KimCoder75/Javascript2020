
let blocchiN = document.getElementById('ElencoBlocchi').childNodes;

blocchiN.forEach((item, i) => {
    console.log(item.textContent)
});



let blocchiH = document.getElementById('ElencoBlocchi').children,
    arrayHTLMCollection = Array.from(blocchiH);

arrayHTLMCollection.forEach((item, i) => {
    console.log(item.textContent)
});

    // let blocchi = document.getElementById('ElencoBlocchi').childNodes,
    //     blocchiElenco = Array.from(blocchi);
    //
    // blocchi.forEach((item, i) => {
    //     console.log(item);
    //     });
