// const links = document.querySelectorAll('nav > a');
// links.forEach((item, i) => {
//   if (i%2==0) {
//       item.addEventListener('click',colora)
//   }else {
//       item.addEventListener('click',colora2)
//   }
// });
//
// function colora(e) {
//   e.preventDefault();
//   e.target.style.color = 'red';
// };
// function colora2(e) {
//   e.preventDefault();
//   e.target.style.color = 'blue';
//   }

const nav = document.querySelector('body');
nav.addEventListener('click',(e)=>{
  if (e.target.tagName === 'A') {
    e.preventDefault();
    e.target.style.color = 'red';
  }
});
