/* Object.preventExtensions */
'use strict'
let obj = {
  p1:10
};
Object.preventExtensions(obj);
obj.p1=200;
console.log(obj.p1);


let user = {
    info:{
    nome:"Anna",
    anni:25
  }
};
Object.preventExtensions(user);

user.info.lavoro ="Ballerina"
console.log(user.info);
delete user.info;
console.log(user.info);
obj.p3= "Gianluigi"
console.log(obj);
