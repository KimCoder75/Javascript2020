//https://jsonplaceholder.typicode.com/
const xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
xhr.send();

xhr.onload = function() {
  if(this.status === 200){
    const postsJSON = this.responseText;
    const posts =JSON.parse(postsJSON);
    showPosts(posts);
  }
}

function showPosts(posts){
  posts.forEach((post, i) => {
    // console.log(post.body + '\n\n');
    console.log(`${post.id}\n${post.body}\n`);

  });

}
