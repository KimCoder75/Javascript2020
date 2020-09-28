// document.addEventListener('click',(event)=>{
//   console.log(event.target.innerText);
// });
let ins = [];
const inp = document.getElementById('carattere');
inp.addEventListener('keypress',(ev)=>{
  // car.push(ev.which);
  //console.log(ev.which);
  if (ev.which === 13) {
    let inpVal = inp.value;
    ins.push(inpVal);
    inp.value = '';
    // console.log(`Hai digitato: ${inpVal}`);
  }

});
