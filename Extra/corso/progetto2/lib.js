/*jshint -W030, -W033, -W119, -W104*/
/*jshint expr:true*/
const blog = {
  itemPerPage: 5,
  temporaryPage: 0,
  totalPages: 0,
  blogWrapper: document.getElementById('blog-w'),
  pagePositionWrapper: document.getElementById('page-position-w'),
  posts: [],
  areAllpostsShown: false
};

window.addEventListener('scroll', setBookmarkPosition);

async function initBlog() {
  const postData = await fetch('https://jsonplaceholder.typicode.com/posts');
  blog.posts = await postData.json();
  blog.posts.length = 25;
  blog.totalPages = Math.ceil(blog.posts.length / blog.itemPerPage);
  initBookmarks();
  showPosts();
  checkCodeBlocks()
}

function checkCodeBlocks() {
  let scrollTop, scrollHeight, scrollTopMax, clientHeight, temporaryPage, totalPages, areAllpostsShown;
  ({
    scrollTop,
    scrollHeight,
    scrollTopMax,
    clientHeight
  } = document.documentElement);
  ({
    temporaryPage,
    totalPages,
    areAllpostsShown
  } = blog);
  console.clear();
  console.log(`Debug:
	scrollTop: ${scrollTop}
	scrollHeight: ${scrollHeight}
	clientHeight: ${clientHeight}
	scrollTopMax: ${scrollTopMax}
	scrollHeight - clientHeight: ${scrollHeight - clientHeight}
	(scrollHeight - clientHeight) === scrollTopMax: ${(scrollHeight - clientHeight) === scrollTopMax}
	temporaryPage: ${temporaryPage}
	totalPages-1: ${totalPages-1}
	areAllpostsShown: ${areAllpostsShown}
	altezza pagina: ${((scrollTopMax)/(totalPages-1))}
	altezza pagina2: ${((scrollHeight-36)/(temporaryPage+1))}
	altezza pagina3: ${(scrollHeight-36)/5}
	altezza pagina4: ${((scrollTop)/5)-36}
	`);
}

function initBookmarks() {
  for (let i = 0; i < blog.totalPages; i++) {
    let classes = 'position';
    (i == blog.temporaryPage) ? classes += ' active': '';
    let span = document.createElement('span');
    span.setAttribute('class', classes);
    blog.pagePositionWrapper.appendChild(span);
  }
}

function setBookmarkPosition() {
  let scrollTop, scrollTopMax, temporaryPage, totalPages;
  ({
    scrollTop,
    scrollTopMax
  } = document.documentElement);
  ({
    temporaryPage,
    totalPages
  } = blog);
  if ((scrollTop >= scrollTopMax) && (temporaryPage < (totalPages - 1))) {
    blog.temporaryPage++;
    showPosts();
  }
  checkCodeBlocks();
}

//TODO: si basa tutto su temporaryPage, impostare bene temporaryPage
function showPosts() {
  let start, temporaryPage, itemPerPage, blogWrapper, posts, areAllpostsShown, totalPages;
  ({
    temporaryPage,
    itemPerPage,
    blogWrapper,
    posts,
    areAllpostsShown,
    totalPages
  } = blog);
  start = temporaryPage * itemPerPage;
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
  if (temporaryPage === (totalPages - 1)) {
    blog.areAllpostsShown = true;
    // setCurrentPage();
  }
}

// setCurrentPage() {
//
// }

function addPosts(i, h3, div1, div2, posts) {
  h3.innerText = posts[i].title;
  div1.innerText = posts[i].body;
  div2.innerText = posts[i].id;
}

initBlog();
