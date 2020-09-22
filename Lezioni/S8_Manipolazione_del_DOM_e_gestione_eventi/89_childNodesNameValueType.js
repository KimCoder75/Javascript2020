
let sectionNodes = document.getElementById('section1').childNodes;
for (let i = 0; i < sectionNodes.length; i++) {
    console.log(sectionNodes[i].nodeName);
    console.log(sectionNodes[i].nodeValue);
    console.log(sectionNodes[i].innerText);
    console.log(sectionNodes[i].nodeType);
    console.log(sectionNodes[i].parentElement);
    console.log(" ");
}
console.dir(sectionNodes);
