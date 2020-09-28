// document.addEventListener('click',(event)=>{
//   console.log(event.target.innerText);
// });
// let car = [];
const inp = document.getElementById('carattere');
inp.addEventListener('keypress',(pippo)=>{
  // car.push(pippo.which);
  // console.log(pippo.which);
  if (pippo.which === 13) {
    let inpVal = inp.value;
    inp.value = '';
    console.log(`Hai digitato: ${inpVal}`);
  }
});
