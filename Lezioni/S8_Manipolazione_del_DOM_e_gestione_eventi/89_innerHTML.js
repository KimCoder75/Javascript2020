
let nuoviBlocchi = document.getElementById('section1');
nuoviBlocchi.innerHTML =(`
        <div class="b1">BLOCCO 1</div>
        <div class="b1">BLOCCO 2</div>
        <div class="b1">BLOCCO 3</div>
        <div class="b1">BLOCCO 4</div>
        <div class="b1">BLOCCO 5</div>
        <div class="b1">BLOCCO 6</div>
        <div class="b1">BLOCCO 7</div>
        <div class="b1">BLOCCO 8</div>
        <div class="b1">BLOCCO 9</div>
        <div class="b1">BLOCCO 10</div>
`);
let nuovaNavBar = document.getElementById('navBar');
nuovaNavBar.innerHTML =(`
      <a href="index.html">Logo</a>
      <a href="chiSiamo.html">Chi Siamo</a>
      <a href="mission.html">Mission</a>
      <a href="doveSiamo.html">Dove siamo</a>
      <a href="iNostriValori.html">I nostri Valori</a>
      <a href="Contatti.html">Contatti</a>
  `);

console.dir(nuoviBlocchi.childNodes);
console.dir(nuoviBlocchi.children);
console.dir(nuovaNavBar.childNodes);
console.dir(nuovaNavBar.children);
