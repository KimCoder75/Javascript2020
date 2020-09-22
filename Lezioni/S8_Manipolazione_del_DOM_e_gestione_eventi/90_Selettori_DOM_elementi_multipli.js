let sezione = document.getElementById('section1');
let links = document.getElementsByTagName('a');
let linksPari = document.querySelectorAll('header > nav >a:nth-child(even)');
let b1 = sezione.getElementsByClassName('b1');

linksPari.forEach((item, i) => {
  item.style.background="blue";
  item.style.color="white";
});


// b1 = Array.from(b1);
//
// console.log(b1.reverse());
console.dir(b1);
console.dir(links);
console.log(linksPari);
