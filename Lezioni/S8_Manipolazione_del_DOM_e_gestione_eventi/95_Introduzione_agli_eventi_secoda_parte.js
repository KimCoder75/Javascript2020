// document.addEventListener('click',(event)=>{
//   console.log(event.target.innerText);
// });
let ins = [];
const inp = document.getElementById('carattere');
inp.addEventListener('keypress',(pippo)=>{
  // car.push(pippo.which);
  // console.log(pippo.which);
  if (pippo.which === 13) {
    let inpVal = inp.value;
    ins.push(inpVal);
    inp.value = '';
    console.log(`Hai digitato: ${inpVal}`);
  }
});
