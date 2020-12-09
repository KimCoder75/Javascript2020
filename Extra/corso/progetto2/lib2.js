// this.scrollHeight - this.scrollTop === this.clientHeight
/*jshint -W030, -W119, -W104*/
/*jshint expr:true*/
const pagina = {
  attiva: 0,
  altezza: 0,
  margineInferiore: 36,
  listaNodiIndicatori: []
};

const gestioneScrollContenuti = {
  posts: [],
  numeroTotalePosts: 25,
  postsPerBlocco: 5,
  numeroTotaleBlocchi: 0,
  inizioCaricamentoBlocchi: 0,
  numeroBlocchiCaricati: 1
};

window.addEventListener('scroll', () => {
  riconoscimentoPaginaAttiva();
  controllo();
});

async function importaPost() {
  const postImportati = await fetch('https://jsonplaceholder.typicode.com/posts');
  let numeroTotalePosts, postsPerBlocco;
  ({
    numeroTotalePosts,
    postsPerBlocco
  } = gestioneScrollContenuti);
  gestioneScrollContenuti.posts = await postImportati.json();
  gestioneScrollContenuti.posts.length = numeroTotalePosts;
  gestioneScrollContenuti.numeroTotaleBlocchi = (numeroTotalePosts / postsPerBlocco);
  definisciPagina();
  creaIndicatoriDOM();
  creaElementiDOM();
  controllo();
}

function creaIndicatoriDOM() {
  const contenitoreIndicatori = document.getElementById('page-position-w');
  for (let i = 0; i < Math.ceil(gestioneScrollContenuti.numeroTotaleBlocchi); i++) {
    let span = document.createElement('span');
    // (i === 0) ? span.setAttribute('class', 'position active'): span.setAttribute('class', 'position');
    settaIndicatore(span, i);
    contenitoreIndicatori.appendChild(span);
  }
  pagina.listaNodiIndicatori = document.querySelectorAll('span');
}

function creaElementiDOM() {
  const contenitoreContenuti = document.getElementById('blog-w');
  let numeroTotalePosts, postsPerBlocco, inizioCaricamentoBlocchi, numeroBlocchiCaricati;
  ({
    numeroTotalePosts,
    postsPerBlocco,
    inizioCaricamentoBlocchi,
    numeroBlocchiCaricati
  } = gestioneScrollContenuti);
  for (let i = 0; i < 25; i++) {

    const article = document.createElement('article'),
      h3 = document.createElement('h3'),
      div1 = document.createElement('div'),
      div2 = document.createElement('div');

    article.setAttribute('class', 'contenuti-post');
    h3.setAttribute('class', 'title');
    div1.setAttribute('class', 'body');
    div2.setAttribute('class', 'id');

    popolaContenitori(i, h3, div1, div2);

    article.appendChild(h3);
    article.appendChild(div1);
    article.appendChild(div2);

    contenitoreContenuti.appendChild(article);
  }
}

function popolaContenitori(i, h3, div1, div2) {
  h3.innerText = gestioneScrollContenuti.posts[i].title;
  div1.innerText = gestioneScrollContenuti.posts[i].body;
  div2.innerText = gestioneScrollContenuti.posts[i].id;
}

function definisciPagina() {
  pagina.altezza = (document.documentElement.clientHeight - pagina.margineInferiore);
}

// TODO: impostare altezza pagina 930, ScrollMax/(pagine totali -1), sviluppare bene la logica che funzioni indipendentemente da clientHeight.
// TODO: rigidità struttura elementi


function riconoscimentoPaginaAttiva() {
  pagina.attiva = Math.floor(document.documentElement.scrollTop / pagina.altezza);
  impostalistaNodiIndicatoriDiPagina();
}

function impostalistaNodiIndicatoriDiPagina() {
  pagina.listaNodiIndicatori.forEach((item, i) => {
    settaIndicatore(item, i);
    // (i == pagina.attiva) ? item.setAttribute('class', 'position active'): item.setAttribute('class', 'position');
  });
}

importaPost();

function settaIndicatore(item, i) {
	(i == pagina.attiva) ? item.setAttribute('class', 'position active'): item.setAttribute('class', 'position');
}

function controllo() {
  let scrollTop, scrollTopMax, scrollHeight, clientHeight, altezza, attiva, innerHeight;
  ({
    scrollTop,
    scrollTopMax,
    scrollHeight,
    clientHeight
  } = document.documentElement);
  ({
    altezza,
    attiva
  } = pagina);
  ({
    innerHeight
  } = window);
  console.clear();
  console.log(`
ScrollTop: ${scrollTop}
ScrollTopMax: ${scrollTopMax}
ScrollTop === ScrollTopMax: ${scrollTop === scrollTopMax}
ScrollHeight: ${scrollHeight}
ScrollHeight-ScrollTopMax: ${scrollHeight-scrollTopMax}
Altezza Pagina: ${altezza}
Altezza Finestra: ${innerHeight}
ClientHeight: ${clientHeight}
Altezza Finestra === ClientHeight: ${innerHeight === clientHeight}
innerHeight === clientHeight: ${innerHeight === clientHeight}
Pagina attiva: ${attiva}`);
  console.log(pagina);
  console.log(gestioneScrollContenuti);
}
