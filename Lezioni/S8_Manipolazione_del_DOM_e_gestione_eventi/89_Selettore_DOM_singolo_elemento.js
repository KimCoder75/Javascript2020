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
// sezione.style.backgroundColor = "#da12da";
sezione.style.padding ="25px";

// div1.innerText ="Primo Blocco";
// div1.innerHTML = "Primo Blocco con <a href='index.html'>link1</a>";
// console.log(info);
// console.log(numero);

// Var 1
// const sezione = document.getElementById('section1');
// let info = sezione.childNodes;
// info[0].textContent="Ciao";
// info[2].textContent="Ciao";
// info[4].textContent="Ciao";
// info[6].textContent="Ciao";
// console.dir(info);

// Var 2
let sectionNodes = document.getElementById('section1').childNodes;
for (let i = 0; i < sectionNodes.length; i++) {
   if(i%2==0){
     sectionNodes[i].innerText="Ciao";
}
}
console.dir(sectionNodes);
