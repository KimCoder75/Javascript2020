
// Var 2
let nomi = ["Yoda","Miyagi","Hoogway"],
    maestri=0;
    sectionNodes = document.getElementById('section1').childNodes;
for (let i = 0; i < sectionNodes.length; i++) {
   if(i%2==1){
     sectionNodes[i].className="c2";
     sectionNodes[i].innerText=nomi[maestri];
     console.log(sectionNodes[i].innerText);
     maestri+=1;
}else if(i!=6){
    sectionNodes[i].nodeValue="Maestro";
    console.log(sectionNodes[i].nodeValue);
}

}
console.dir(sectionNodes);
