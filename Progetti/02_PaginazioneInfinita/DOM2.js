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

      const article = createItems([
        { type: 'article', class: 'blog-post', txt: '', isParent: true },
        { type: 'h3', class: 'title', txt: blog.posts[i].title, isParent: false },
        { type: 'div', class: 'body', txt: blog.posts[i].body, isParent: false },
        { type: 'div', class: 'id', txt: blog.posts[i].id, isParent: false }
      ]);

      blog.postsW.appendChild(article);
    }
  }
}

function createItems(items) {
  let parent, domItems = [];
  for(let item of items) {
    let doc = document.createElement(item.type);
    doc.setAttribute("class", item.class);
    doc.innerText = item.txt;
    item.isParent ? parent = doc : domItems.push(doc);
  }
  parent.append(...domItems);
  return parent;
}
