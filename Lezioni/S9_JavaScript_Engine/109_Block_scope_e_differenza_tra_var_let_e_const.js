
// {
//   //Block Scope
//   var n = 10;
// }
// console.log(n);
// -------------------------------
// {
//   //Block Scope
//   let n = 10;
// }
// console.log(n);
// -------------------------------
// {
//   //Block Scope
//   let n = 10;
//
//   function a1(){
//     console.log(n);
//   }
//
//   a1();
// }
// -------------------------------
{
  //Block Scope
  function a2(){
    let n = 20;
  }
console.log(n);
}
