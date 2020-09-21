const sezione = document.getElementById('section1');
let info;
info = sezione.id;
info = sezione.className;
info = sezione.childElementCount;
info = sezione.childNodes;
info = sezione.children;
sezione.children[1].className = 'c2';
info = sezione.clientHeight;
info = sezione.clientWidth;
sezione.style.backgroundColor = "#da12da";
sezione.style.padding ="25px";

let div1 = sezione.children[0];
div1.innerText ="Primo Blocco";
div1.innerHTML = "Blocco con <a href='index.html'>link1</a>";
console.log(div1);

// Var 1
// const sezione = document.getElementById('section1');
// let info = sezione.childNodes;
// info[0].textContent="Ciao";
// info[2].textContent="Ciao";
// info[4].textContent="Ciao";
// info[6].textContent="Ciao";
// console.dir(info);

// Var 2
// const sezione = document.getElementById('section1');
// let info = sezione.childNodes;
// for (let i = 0; i < childNodes.length; i++) {
//    if(i%2==0){
//      info[i].textContent="Ciao";
// }
// }
// console.dir(info);
