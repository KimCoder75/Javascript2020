/*
 * Esercitazione: Progress Bar scorrimento documento
*/

let PB = {};
document.addEventListener('DOMContentLoaded', () => {
    PB.barra = document.getElementById('progress');
    PB.html = document.documentElement;
    PB.barra.style.width = "0%";
});

window.addEventListener('scroll', progressFn);
function progressFn() {
    const scrollTotale = PB.html.scrollHeight - PB.html.clientHeight;
    PB.barra.style.width = (PB.html.scrollTop * 100) / scrollTotale + "%";
}
