let a =[1,5,23,5,2,3,4,3,66];
let b =[23,34,45,56];
let c = [...a,...b];
let n = a.length;
let minimo = Math.min(...a);
let massimo = Math.max(...a)
let mediaMaxMin = (massimo - minimo)/(n)
console.log(minimo);
console.log(massimo);
console.log(n);
console.log(mediaMaxMin);
console.log(a);
console.log(b);
console.log(c);
