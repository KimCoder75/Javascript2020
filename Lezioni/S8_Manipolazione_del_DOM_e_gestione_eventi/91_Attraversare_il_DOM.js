console.log(document.firstChild);
console.log(document.firstChild.nodeName);
console.log(document.firstChild.nodeType);
const body = document.querySelector('body');
const f1 = body.firstChild
console.log(body);
console.log(`Prima di Body ${body.previousSibling}`);
console.log(`Elemento Prima di Body ${body.previousElementSibling}`);
console.log(body.nodeName);
console.log(body.nodeType);
console.log(f1);
console.log(f1.nodeName);
console.log(f1.nodeType);
console.log(f1.nextSibling);
console.log(f1.nextElementSibling);
