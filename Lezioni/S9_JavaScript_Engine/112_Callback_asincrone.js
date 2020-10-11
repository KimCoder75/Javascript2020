// console.log(1);
// setTimeout(() => console.log(2),5000);
// console.log(3);
// -----------------------------
// console.log(1);// viene inserito nello stack
// setTimeout(() => console.log(2),0);// viene rimosso dallo stack, messo nella Callback queue
//inserito nel web API e inserito nella CallbacK Queue
// console.log(3);// viene inserito nello stack
// ----------------------------------
// ----------------------------------
// setTimeout è un'istruzione della web API non di Javascript, che
// rimuove dallo stack la Callback con l'istruzione e la mette nella web API
// dopo x millisecondi viene inserita nella Callback queue
// la inserisce nella Callback queue
// Nel frattempo l'event loop conta i millisecondi
// verifica le le istruzioni dello stack siano eseguite
// Quando il tempo è passato
// l'Event loop inserisce
// l'istruzione nello stack
// lo stack la esegue(come se fosse stata inserita in quel momento)

/*
setTimeout 1000 -> Web API -> dopo 1000 ms -> Callback Queue
dopo i 1000ms, non appena lo stack è libero -> sposta l'istruzione nello stack
lo stack la esegue,
se lo stack non è libero ci sono dei ritardi.
*/








// ----------------------------------
// ----------------------------------
console.log(1);// viene inserito nello stack
setTimeout(() => console.log(2),0);// viene rimosso dallo stack, messo nella Callback queue
setTimeout(() => console.log(3),0);// viene rimosso dallo stack, messo nella Callback queue
setTimeout(() => console.log(4),0);// viene rimosso dallo stack, messo nella Callback queue
setTimeout(() => console.log(5),0);// viene rimosso dallo stack, messo nella Callback queue
//inserito nel web API e inserito nella Callback Queue
console.log(6);// viene inserito nello stack
