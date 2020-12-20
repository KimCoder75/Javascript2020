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
	isScrollFixed: false,
	delta: 0,
	newBottomPadding: ''
}

window.addEventListener('scroll', scrollManager);

function scrollManager() {
	let scrollTop, scrollTopMax, clientHeight, scrollHeight;
	({
		scrollTop,
		scrollTopMax,
		clientHeight,
		scrollHeight
	} = document.documentElement);
	if (blog.posts.length > 0 && ((scrollTop / scrollTopMax) >= 1) && blog.activeBookmark<4) {
		blog.posts.splice(0, 5);
		blog.activeBookmark++
	//TODO: impostare un riporzionamento basato su 2450/4680*scroll height
	// TODO: verificare differenza tra 966 e 960 di clientHeight
		initPages();
	}
	// 40 è la somma del padding-top e padding-bottom
	// blog.activeBookmark = Math.floor(scrollTop / (clientHeight - 40));
	console.clear();
	console.log('ScrollTop:', scrollTop, 'T/M:', Math.floor(((scrollTop) / (scrollTopMax - blog.delta)) * 4));
	console.log('Scroll Y:', window.scrollY);
	console.log(scrollTop === window.scrollY);
	console.log('clientHeight:',clientHeight);
	console.log('scrollTopMax:', scrollTopMax, 'scrollHeight:', scrollHeight);
	console.log(blog.activeBookmark);
	setBookmarks();
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

function setBookmarks() {
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
	// else {
	// 	blog.activeBookmark = Math.floor((scrollTop / (scrollTopMax - blog.delta)) * 4);
	// }
}

function scrollingAdjustment() {
	(document.documentElement.scrollHeight > document.documentElement.clientHeight) ? blog.isScrollFixed = true: blog.isScrollFixed;

	console.log('Is it scrollable?', blog.isScrollFixed);
	console.log('scrollHeight:', document.documentElement.scrollHeight, 'clientHeight:', document.documentElement.clientHeight);

	if (document.documentElement.scrollTopMax == 0) {
		blog.delta = (window.outerHeight - document.documentElement.clientHeight);
		blog.newBottomPadding = document.getElementById('blog-w').style.paddingBottom = `${blog.delta}px`;
		blog.isScrollFixed = true;
		console.log('Set the padding bottom to:', blog.delta, 'px, now it is scrollable! ScrollHeight:', document.documentElement.scrollHeight, 'clientHeight:', document.documentElement.clientHeight);
		console.log('Is it scrollable?', blog.isScrollFixed);
	}
}

initBlog();
