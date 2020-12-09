// this.scrollHeight - this.scrollTop === this.clientHeight
/*jshint -W030, -W119, -W104*/
/*jshint expr:true*/
const blog = {
  itemPerPage : 5,
  currentPage : 0,
  totalePages : 0,
  blogWrapper : document.getElementById('blog-w'),
  pagePositionWrapper : document.getElementById('page-position-w'),
  posts : []
};
async function initBlog(){
  const postData = await fetch('https://jsonplaceholder.typicode.com/posts');
  blog.posts = await postData.json();
  blog.posts.length = 25;
  showPosts();
}

//TODO: si basa tutto su currentPage, impostare bene currentPage

function showPosts(){
  let start, currentPage, itemPerPage, posts;
  ({currentPage, itemPerPage, posts} = blog);
  start = currentPage*itemPerPage;
  for (var i = start; i < start + itemPerPage; i++) {
    let DOM_post = document.createElement('article');
  	DOM_post.setAttribute('class', 'blog-post');
  	let DOM_postH3 = document.createElement('h3');
  	DOM_postH3.setAttribute('class', 'title');
  	let DOM_postDiv1 = document.createElement('div');
  	DOM_postDiv1.setAttribute('class', 'body');
  	let DOM_postDiv2 = document.createElement('div');
  	DOM_postDiv2.setAttribute('class', 'info');

  	blog.blogWrapper.appendChild(DOM_post);

  	DOM_post.appendChild(DOM_postH3);
  	DOM_post.appendChild(DOM_postDiv1);
  	DOM_post.appendChild(DOM_postDiv2);
  }


}

initBlog();
