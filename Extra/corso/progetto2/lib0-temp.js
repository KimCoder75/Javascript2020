/*jshint -W030,-W033,-W119,-W104*/
/*jshint expr:true*/
const blog = {
	itemsPerPage : 5,
	currentPage: 0,
	totalePage: 0,
	blogWrapper : document.getElementById('blog-w'),
	pagePositionWrapper : document.getElementById('page-position-w'),
	arePostCharged : false,
	flag : 0,
	posts : []
}

window.addEventListener('scroll', (e)=>{
	let scrollHeight, clientHeight, scrollTop, scrollTopMax;
	({scrollHeight, clientHeight, scrollTop, scrollTopMax} = document.documentElement);
	console.log('scrollTop',scrollTop,'scrollTopMax',scrollTopMax,'scrollTop - scrollTopMax + 1',(scrollTop - scrollTopMax + 1),'blog.currentPage',blog.currentPage);
	if ((scrollTop >= scrollTopMax - 1) && (blog.currentPage < blog.totalPage -1)) {
		blog.currentPage++
		showPosts(scrollHeight, clientHeight, scrollTop, scrollTopMax);
		// logs();
		setIndicatoreAttivo();
	} else {
		blog.currentPage--
		// setIndicatoreAttivo();
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
	console.log(blog.posts);
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
		console.log(blog.posts[i].id);
		console.log(blog.posts[i].title);
		console.log(blog.posts[i].body);
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

					blog.blogWrapper.appendChild(article);
	}
}



initBlog();
