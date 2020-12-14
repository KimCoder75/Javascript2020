/*jshint -W030,-W033,-W119,-W104*/
/*jshint expr:true*/
const blog = {
	itemsPerPage : 5,
	currentPage: 0,
	totalePage: 0,
	blogWrapper : document.getElementById('blog-w'),
	pagePositionWrapper : document.getElementById('page-position-w'),
	arePostCharged : false,
	flag : 0
}

window.addEventListener('scroll', (e)=>{
	let scrollHeight, clientHeight, scrollTop, scrollTopMax;
	({scrollHeight, clientHeight, scrollTop, scrollTopMax} = document.documentElement);
	console.log(scrollTopMax);
	if ((scrollTop >= scrollTopMax - 1) && (blog.currentPage < blog.totalPage -1)) {
		blog.currentPage++
		showPosts(scrollHeight, clientHeight, scrollTop, scrollTopMax);
		// logs();
		setIndicatoreAttivo();
	}
});

// function logs(scrollHeight, clientHeight, scrollTop, scrollTopMax){
// 	if (blog.currentPage === (blog.totalPage -1)) {
// 		blog.arePostCharged = true;
// 		blog.flag = (scrollTop/scrollTopMax);
// 		console.log('scrollTop:',scrollTop,'scrollTopMax:',scrollTopMax,'Flag:',blog.flag);
// 	}
// }

function setIndicatoreAttivo(){
	let indicatori = document.querySelectorAll('span.position');
	indicatori.forEach((indicatore, i) => {
		(i === blog.currentPage)? indicatore.setAttribute('class','position active'):indicatore.setAttribute('class','position');
	});
}

async function initBlog(){
	const postData = await fetch('https://jsonplaceholder.typicode.com/posts');
	blog.posts = await postData.json();
	blog.posts.splice(25,75);
	blog.totalPage = Math.ceil(blog.posts.length/blog.itemsPerPage);
	initIndicatoriPaginazione();
	showPosts();
}

function initIndicatoriPaginazione(){
	for (let i = 0; i < blog.totalPage; i++) {
		let pagination = document.createElement('span');
		(i === 0)? pagination.setAttribute('class','position active'):pagination.setAttribute('class','position');
		blog.pagePositionWrapper.appendChild(pagination);
	}
}

function showPosts(){
	let start = blog.currentPage * blog.itemsPerPage;
	for (let i = start; i < start + blog.itemsPerPage; i++) {
		let DOM_post = document.createElement('article');
		DOM_post.setAttribute('class', 'blog-post');
		DOM_post.innerHTML = createPostHTML(blog.posts[i]);
		blog.blogWrapper.appendChild(DOM_post);
	}
}

function createPostHTML({ id, title, body }){
	return `<h3 class='title'>${title}</h3>
	<div class ='body'>${body}</div>
	<div class ='id'>${id}</div>`
}



initBlog();
