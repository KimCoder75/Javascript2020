// function fn(a){
//   let sum = a +10;
//   console.log(sum);
// }
// fn(5);
// --------------------------------------
// function a1(a){
//   var aFattore = 1.5;
//   return () => {
//     var aCalcolo = (aFattore*a)-10;
//     console.log(aCalcolo);
//   }
// }
//
// var a1a = a1(100),
//     a1b = a1(200);

// a1a();
// a1b();

// console.log(window);
// ----------------------------------------
function afn1(a){
  let fattore = 1.5;
  return () => {
    let calcolo = (fattore*a)-10;
    console.log(calcolo);
  }
}

var a1a = afn1(100),
    a1b = afn1(200);

a1a();
a1b();

console.log(window);
