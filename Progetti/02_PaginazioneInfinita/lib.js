/*jshint -W030,-W033,-W119,-W104*/
/*jshint expr:true*/
/* Chrome, Firefox version */
const blog = {
	postPerPage: 5,
	totalPages: 0,
	bookmarksW: document.getElementById('page-position-w'),
	postsW: document.getElementById('blog-w'),
	posts: [],
	totalPosts: 25,
	activeBookmark: 0,
	paddingBottomW: 0,
	paddingTop: 30,
	firstPageYCoordinate: [Infinity]
}

window.addEventListener('scroll', scrollManager);

function setYCoordinates(scrollHeight) {
	let paddingBottomW, paddingTop, coordsY;
	({
		paddingBottomW,
		paddingTop
	} = blog);
	coordsY = (scrollHeight - paddingTop - paddingBottomW);
	(blog.firstPageYCoordinate[0] === Infinity) ?
	blog.firstPageYCoordinate[0] = (coordsY):
	blog.firstPageYCoordinate.push(coordsY);
}

function scrollManager() {
	let scrollTop, clientHeight, scrollHeight,scrollMax;
	({
		scrollTop,
		clientHeight,
		scrollHeight
	} = document.documentElement);
	scrollMax = (scrollHeight - clientHeight);
	// blog.activeBookmark = ~~(scrollTop / blog.firstPageYCoordinate[0]).toFixed(1);
	blog.activeBookmark = ~~(scrollTop / blog.firstPageYCoordinate[0]);
	if (blog.posts.length > 0 && ((scrollTop / scrollMax) >= 1)) {
		blog.posts.splice(0, 5);
		setYCoordinates(scrollHeight);
		initPages();
	}
	debug(scrollTop, scrollMax, clientHeight, scrollHeight);
	setBookmarks(scrollTop, scrollMax);
}

function debug(scrollTop, scrollMax, clientHeight, scrollHeight) {
	console.clear();
	console.log('clientHeight:', clientHeight, 'scrollHeight:', scrollHeight);
	console.log('ScrollTop:', scrollTop, 'scrollMax:', scrollMax);
	console.log('Padding Bottom:', blog.postsW);
	console.log('Padding Bottom', blog.paddingBottomW);
	console.log('Y Page Reference:', blog.firstPageYCoordinate[0]);
	console.log('All Pages References:', blog.firstPageYCoordinate);
	console.log('Active bookmark:', blog.activeBookmark);
	console.log('+(scrollTop/(blog.firstPageYCoordinate[0])).toFixed(1):', +(scrollTop / (blog.firstPageYCoordinate[0])).toFixed(1));
	console.log('(scrollTop/(blog.firstPageYCoordinate[0])):', (scrollTop / (blog.firstPageYCoordinate[0])));
	console.log('clientHeight - blog.firstPageYCoordinate - blog.paddingTop',(clientHeight - blog.firstPageYCoordinate[0] - blog.paddingTop));
  console.log('clientHeight - blog.firstPageYCoordinate - blog.paddingTop > 0',(clientHeight - blog.firstPageYCoordinate[0] - blog.paddingTop)>0);
}

async function initBlog() {
	const importedPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
	blog.posts = await importedPosts.json();
	blog.posts.length = blog.totalPosts;
	blog.totalPages = Math.ceil(blog.totalPosts / blog.postPerPage);

	initBookmark();
	initPages();
}

function bookmarkActivator(index, ref, anchor) {
	(index === ref) ? anchor.setAttribute('class', 'position active'): anchor.setAttribute('class', 'position');
}

function initBookmark() {
	for (let i = 0; i < blog.totalPages; i++) {
		let span = document.createElement('span');
		bookmarkActivator(i, 0, span);
		blog.bookmarksW.appendChild(span)
	}
}

function setBookmarks(scrollTop, scrollMax) {
	let bookmarks = document.querySelectorAll('span.position')
	bookmarks.forEach((bookmark, i) => {
		bookmarkActivator(i, blog.activeBookmark, bookmark);
	});
}

function initPages() {
	if (blog.posts.length !== 0) {
		for (let i = 0; i < blog.postPerPage; i++) {

			const article = document.createElement('article'),
				h3 = document.createElement('h3'),
				div1 = document.createElement('div'),
				div2 = document.createElement('div');

			article.setAttribute('class', 'blog-post');
			h3.setAttribute('class', 'title');
			div1.setAttribute('class', 'body');
			div2.setAttribute('class', 'id');

			h3.innerText = blog.posts[i].title;
			div1.innerText = blog.posts[i].body;
			div2.innerText = blog.posts[i].id;

			article.appendChild(h3);
			article.appendChild(div1);
			article.appendChild(div2);

			blog.postsW.appendChild(article);
		}
		scrollingAdjustment();
	}
}

// TODO: trovare il valore di inizializzazione di margin bottom
function scrollingAdjustment() {
	let scrollHeight, clientHeight, scrollMax, delta, firstPageYCoordinate;
	({
		scrollHeight,
		clientHeight
	} = document.documentElement);
	({firstPageYCoordinate} = blog);
	delta = 0;
	scrollMax = (scrollHeight - clientHeight);
	if (scrollHeight == clientHeight && blog.posts.length != 0)  {
		delta = (window.outerHeight - clientHeight);
	}
	else if (firstPageYCoordinate[3] && scrollMax < (firstPageYCoordinate[3])) {
		delta = (firstPageYCoordinate[3] - scrollMax);
	}
	blog.paddingBottomW = delta;
	blog.postsW.style.paddingBottom = `${delta}px`;

}

initBlog();
