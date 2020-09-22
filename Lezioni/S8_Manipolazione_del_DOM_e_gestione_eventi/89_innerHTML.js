
let sectionNodes = document.getElementById('section1');
sectionNodes.innerHTML =(`
        <div class="c2">div1</div>
        <div>div2</div>
        <div class="c2">div3</div>
        <div>div2</div>
        <div class="c2">div3</div>
        <div>div2</div>
        <div class="c2">div3</div>
        <div>div2</div>
        <div class="c2">div3</div>
        <div>div2</div>
        <div class="c2">div3</div>
        <div class="c2">div1</div>
        <div>div2</div>
`);

console.dir(sectionNodes.childNodes);
console.dir(sectionNodes.children);
