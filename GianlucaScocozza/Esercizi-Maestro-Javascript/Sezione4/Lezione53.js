//**iterare un oggetto**
// for in loop
// Object.keys
// Object.hasOwnProperty()
// Object.getOwnPropertyNames()
// Object.values()
let obj_padre ={
  key4:"value4"
}

let obj  = {
key1:"value1",
key2:"value2",
key3:"value3",
};
obj.key5 ="value5";

Object.setPrototypeOf(obj,obj_padre);

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key,obj[key]);
  }
}

let items = Object.keys(obj);
console.log(items);
for (var item of items) {
  console.log(item, obj[item]);
}

let items2 = Object.getOwnPropertyNames(obj);
console.log(items2);
for (var item of items2) {
  console.log(item, obj[item]);
}

let items3 = Object.values(obj);
console.log(items3);
for (var item of items3) {
  console.log(item);
}
