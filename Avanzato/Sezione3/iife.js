let calcola = (function(a,b){
  var fattore = 1.2
  let ris = ((a+b)*fattore);
  console.log(+ris.toFixed(2));
})(2,4);

let Chat = (function(){

  function chat(tipo){
    if (tipo == "Mobile"){
      startChatMobile();
    } else {
      startChat();
    }

  }

  function startChat(){
console.log("Sto avviando la chat...");
  }

  function startChatMobile(){
console.log("Sto avviando la chat mobile...");
  }

return {
  init: function(tipo){
    chat(tipo);
  }
}

})();
