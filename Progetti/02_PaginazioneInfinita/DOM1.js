/*jshint -W030,-W033,-W119,-W104*/
/*jshint expr:true*/
/* Chrome, Firefox version */

// function initPages() {
// 		for (let i = 0; i < blog.postPerPage; i++) {
//       // creo castanti article (padre),  h3, div1, div2 (figli)
//
// 			const article = document.createElement('article'),
// 				h3 = document.createElement('h3'),
// 				div1 = document.createElement('div'),
// 				div2 = document.createElement('div');
//
// 			h3.setAttribute('class', 'title');
// 			div1.setAttribute('class', 'body');
// 			div2.setAttribute('class', 'id');
//
// 			h3.innerText = blog.posts[i].title;
// 			div1.innerText = blog.posts[i].body;
// 			div2.innerText = blog.posts[i].id;
//
// 			article.appendChild(h3);
// 			article.appendChild(div1);
// 			article.appendChild(div2);
//
//       article.setAttribute('class', 'blog-post');
// 			blog.postsW.appendChild(article);
//
// 		}
// }
function initPages() {
  if (blog.posts.length !== 0) {
    for (let i = 0; i < blog.postPerPage; i++) {

      const article = createNewItem('article', 'blog-post'),
        h3 = createNewItem('h3', 'title', blog.posts[i].title),
        div1 = createNewItem('div', 'body', blog.posts[i].body),
        div2 = createNewItem('div', 'id', blog.posts[i].id);

      //N.B. append purtroppo non supportato in IE
      article.append(h3, div1, div2);
      blog.postsW.append(article);
    }
  }
}

function createNewItem(type, classList, innerTxt = '') {
  const newItem = document.createElement(type);
  newItem.setAttribute('class', classList);
  newItem.innerText = innerTxt;
  return newItem;
}
