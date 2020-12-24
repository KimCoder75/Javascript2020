/*jshint -W030,-W033,-W119,-W104*/
/*jshint expr:true*/
const blog = {
	postPerPage: 5,
	totalPages: 0,
	bookmarksW: document.getElementById('page-position-w'),
	postsW: document.getElementById('blog-w'),
	posts: [],
	totalPosts: 25,
	activeBookmark: 0,
	delta: 0,
	newPaddingBottom: document.getElementById('blog-w'),
	paddingTop: 30,
	firstPageYCoordinate: [Infinity]
}

window.addEventListener('scroll', scrollManager);

function setYCoordinates(scrollHeight) {
	let delta, paddingTop, coordsY;
	({
		delta,
		paddingTop
	} = blog);
	coordsY = (scrollHeight - paddingTop - delta);
	(blog.firstPageYCoordinate[0] === Infinity) ?
	blog.firstPageYCoordinate[0] = (coordsY):
		blog.firstPageYCoordinate.push(coordsY);
}

function scrollManager() {
	let scrollTop, scrollTopMax, clientHeight, scrollHeight;
	({
		scrollTop,
		scrollTopMax,
		clientHeight,
		scrollHeight
	} = document.documentElement);
	blog.activeBookmark = Math.floor(+((scrollTop / (blog.firstPageYCoordinate[0])).toFixed(1)));
	if (blog.posts.length > 0 && ((scrollTop / scrollTopMax) >= 1)) {
		blog.posts.splice(0, 5);
		setYCoordinates(scrollHeight);
		initPages();
	}
	debug(scrollTop, scrollTopMax, clientHeight, scrollHeight)
	setBookmarks(scrollTop, scrollTopMax);
}

function debug(scrollTop, scrollTopMax, clientHeight, scrollHeight) {
	console.clear();
	console.log('clientHeight:', clientHeight, 'scrollHeight:', scrollHeight);
	console.log('ScrollTop:', scrollTop, 'scrollTopMax:', scrollTopMax);
	console.log('Padding Bottom:', blog.newPaddingBottom);
	console.log('Padding Bottom', blog.delta);
	console.log('Y Page Reference:', blog.firstPageYCoordinate[0]);
	console.log('All Pages References:', blog.firstPageYCoordinate);
	console.log('Active bookmark:', blog.activeBookmark);
	console.log('(scrollTop/(blog.firstPageYCoordinate[0])):', +((scrollTop / (blog.firstPageYCoordinate[0])).toFixed(1)));
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

function setBookmarks(scrollTop, scrollTopMax) {
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

function scrollingAdjustment() {
	let scrollHeight, clientHeight, scrollTopMax, delta = 0;
	({
		scrollHeight,
		clientHeight,
		scrollTopMax
	} = document.documentElement);
	(scrollHeight == clientHeight && blog.posts.length != 0) ? delta = (window.outerHeight - clientHeight): delta;
	blog.delta = delta;
	blog.newPaddingBottom.style.paddingBottom = `${delta}px`;
	// blog.newPaddingBottom.style.cssText= `padding-bottom: ${delta}px`;

}

initBlog();
