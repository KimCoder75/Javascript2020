//getPrototypeOf e setPrototypeOf

let obj1={
p1: "v1",
p2: "v2",
p3: "v3",
};

let obj2 = Object.create(obj1);
obj2.p4 ="v4";
obj2.fn1 = () =>2**3;
console.log(obj2.p4);

let obj3={
  p4:"v4",
  fn2 : () =>2**4,
};

Object.setPrototypeOf(obj3,obj1);
console.log(obj3.__proto__==obj1); //__proto__ deprecata
console.log(Object.getPrototypeOf(obj3));
console.log(Object.getPrototypeOf(obj1));
