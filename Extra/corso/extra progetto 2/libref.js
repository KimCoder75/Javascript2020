// this.scrollHeight - this.scrollTop === this.clientHeight
/*jshint -W030,-W033,-W119,-W104*/
/*jshint expr:true*/

// TODO: inserire la paginazione

const pagina = {
	attiva: 0,
	altezza: 0,
	margineInferiore: 90,
	listaNodiIndicatori: []
};

const gestioneScrollContenuti = {
	posts: [],
	numeroTotalePosts: 25,
	postsPerBlocco: 5,
	numeroTotaleBlocchi: 0,
	inizioCaricamentoBlocchi: 0,
	numeroBlocchiCaricati: 1,
	pagineTotali: 0,
	start: 0
};

window.addEventListener('scroll', () => {
	riconoscimentoPaginaAttiva();
	popolaPagine();
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
	gestioneScrollContenuti.pagineTotali = (numeroTotalePosts / postsPerBlocco);
	definisciPagina();
	creaIndicatoriDOM();
	creaElementiDOM();
	controllo();
}

function creaIndicatoriDOM() {
	const contenitoreIndicatori = document.getElementById('page-position-w');
	for (let i = 0; i < Math.ceil(gestioneScrollContenuti.numeroTotaleBlocchi); i++) {
		let span = document.createElement('span');
		settaIndicatore(span, i);
		contenitoreIndicatori.appendChild(span);
	}
	pagina.listaNodiIndicatori = document.querySelectorAll('span');
}

function popolaPagine(){
	let scrollTop, scrollTopMax, pagineTotali, start, postsPerBlocco;
	({pagineTotali, start, postsPerBlocco} = gestioneScrollContenuti);
	({scrollTop, scrollTopMax} = document.documentElement);
	if (scrollTop >= scrollTopMax && pagina.attiva < (pagineTotali -1)) {
		creaElementiDOM(start, postsPerBlocco);
		gestioneScrollContenuti.start+=postsPerBlocco;
	}
}

function creaElementiDOM(start, postsPerBlocco) {
	const contenitoreContenuti = document.getElementById('blog-w');

	for (let i = gestioneScrollContenuti.start; i < gestioneScrollContenuti.start + postsPerBlocco; i++) {

		const article = document.createElement('article'),
			h3 = document.createElement('h3'),
			div1 = document.createElement('div'),
			div2 = document.createElement('div');

		article.setAttribute('class', 'blog-post');
		h3.setAttribute('class', 'title');
		div1.setAttribute('class', 'body');
		div2.setAttribute('class', 'id');

		h3.innerText = posts[i].title;
		div1.innerText = posts[i].body;
		div2.innerText = posts[i].id;

		article.appendChild(h3);
		article.appendChild(div1);
		article.appendChild(div2);

		contenitoreContenuti.appendChild(article);
	}
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
	pagina.listaNodiIndicatori.forEach((nodo, i) => {
		settaIndicatore(nodo, i);
	});
}

importaPost();

function settaIndicatore(item, i) {
	let classi = 'position';
	(i == pagina.attiva) ? classi += ' active' : '';
	item.setAttribute('class', classi)
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
