/* Scrivere una funzione che restituisce
una stringa casuale di n caratteri */

function randomString(n){
  const car = "abcdefghil1234567890!£$%&/()=?^#@";
  const lung = car.length
  let rString="";
for (var i = 0; i < n; i++) {
  rString +=car[Math.floor(Math.random()*lung)]
}
  return rString;
}
const pwd = randomString(23)
console.log(pwd);
