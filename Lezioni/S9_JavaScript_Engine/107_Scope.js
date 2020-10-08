// let n = 10;
// function fn(){
//   console.log(n);
// }
// fn();

// function fn(){
//   let n = 10;
// }
// console.log(n);

//Global scope
function a1fn(){
//Local Scope #1
  function a1fn1(){
    //Local Scope #2
  }
}
//Global scope
function a2fn(){
  //Local Scope #3
}
console.log(this);
