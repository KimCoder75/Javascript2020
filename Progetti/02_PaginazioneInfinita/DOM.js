/*jshint -W030,-W033,-W119,-W104*/
/*jshint expr:true*/
/* Chrome, Firefox version */

function initPages() {

	let tags = {h3,div1,div2,article};


		for (let i = 0; i < blog.postPerPage; i++) {
				let
				innerTxt = [blog.posts[i].title,blog.posts[i].body,blog.posts[i].id,''],
				tagString = ['h3','div1','div2','article'],
				tagClasses = ['title','body','id','blog-post'],
				j=0;

				for (var tag of tags) {
					tag = document.createElement(tagString[j])
					tag.setAttribute('class', tagClasses[j]);
					tag.innerText = innerTxt[j];
					if (j!==3) {
						article.appendChild(tag);
					}
					j++;
				}
			}
	}
