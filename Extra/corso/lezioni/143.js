/*
* Strict mode e sloppy mode
*/
'use strict';

function fn(){
  console.log(fn.caller);
}
function fn_inv(){
  fn()
}

fn_inv();
