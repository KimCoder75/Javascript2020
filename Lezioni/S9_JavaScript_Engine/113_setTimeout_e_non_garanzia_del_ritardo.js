console.time();
setTimeout(() => console.log("Ciao"),500);
for (var i = 0; i < 3000000000; i++) {
  i+=1
};
console.timeEnd();
