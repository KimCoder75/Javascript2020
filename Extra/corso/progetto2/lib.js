// this.scrollHeight - this.scrollTop === this.clientHeight
/*jshint -W030, -W119, -W104*/
/*jshint expr:true*/
const blog = {
  itemPerPage: 5,
  currentPageKeyVar: 0,
  totalPages: 0,
  blogWrapper: document.getElementById('blog-w'),
  pagePositionWrapper: document.getElementById('page-position-w'),
  posts: []
};

async function initBlog() {
  const postData = await fetch('https://jsonplaceholder.typicode.com/posts');
  blog.posts = await postData.json();
  blog.posts.length = 25;
  blog.totalPages = Math.ceil(blog.posts.length / blog.itemPerPage);
  initBookmarks();
  showPosts();
}

function initBookmarks() {
  for (let i = 0; i < blog.totalPages; i++) {
    let classes = 'position';
    (i == blog.currentPageKeyVar) ? classes += ' active': '';
    let span = document.createElement('span');
    span.setAttribute('class', classes);
    blog.pagePositionWrapper.appendChild(span);
  }
}

//TODO: si basa tutto su currentPageKeyVar, impostare bene currentPageKeyVar
function showPosts() {
  let start, currentPageKeyVar, itemPerPage, blogWrapper, posts;
  ({
    currentPageKeyVar,
    itemPerPage,
    blogWrapper,
    posts
  } = blog);
  start = currentPageKeyVar * itemPerPage;
  for (let i = start; i < start + itemPerPage; i++) {

    let DOM_post = document.createElement('article'),
      DOM_postH3 = document.createElement('h3'),
      DOM_postDiv1 = document.createElement('div'),
      DOM_postDiv2 = document.createElement('div');

    DOM_post.setAttribute('class', 'blog-post');
    DOM_postH3.setAttribute('class', 'title');
    DOM_postDiv1.setAttribute('class', 'body');
    DOM_postDiv2.setAttribute('class', 'id');

    addPosts(i, DOM_postH3, DOM_postDiv1, DOM_postDiv2, posts);

    DOM_post.appendChild(DOM_postH3);
    DOM_post.appendChild(DOM_postDiv1);
    DOM_post.appendChild(DOM_postDiv2);

    blogWrapper.appendChild(DOM_post);
  }
}

function addPosts(i, h3, div1, div2, posts) {
  h3.innerText = posts[i].title;
  div1.innerText = posts[i].body;
  div2.innerText = posts[i].id;
}

initBlog();
