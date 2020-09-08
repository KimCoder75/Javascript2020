//this
function test() {
  console.log(this.p1);
}
test();

let obj = {
  p1: 30,
  fn: function(){
    console.log(this.p1);
  }
};
obj.fn();

let obj2 = {
  p1:20,
  fn: test
};
obj2.fn();
obj.fn();
