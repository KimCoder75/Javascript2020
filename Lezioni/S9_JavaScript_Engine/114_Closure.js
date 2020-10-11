// function fn(a){
//   let sum = a +10;
//   console.log(sum);
// }
// fn(5);
// --------------------------------------
function fn(a){
  let fattore = 1.5;
  return () => {
    let calcolo = (fattore*a)-10;
    console.log(calcolo);
  }
}

const rif = fn(100);
const rif2 = fn(200);
rif();
rif2();
