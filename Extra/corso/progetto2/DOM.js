// this.scrollHeight - this.scrollTop === this.clientHeight
/*jshint -W030, -W119, -W104*/
/*jshint expr:true*/


//Scrivere una funzione che crei elementi del dom

function DOM_Creator(anchor, node, attribute, text, child) {
  let parent = document.getElementById(anchor),
    eNode = parent.createElement(node),
    eAttribute parent.setAttribute('class', attribute),
    eText = parent.innerText(text);

  eNode.appendChild(eAttribute);
  eNode.appendChild(eText);
  anchor.appendChild(eNode)
}
