const inp = document.getElementById('username');

inp.addEventListener('keypress', function(e){
  if(e.which === 13){
    invia(this.value);
  }
});

function invia(username){
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'test.php', true);
  xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  xhr.send('username='+username);
  xhr.onload = function(){
    console.log(xhr.responseText)
  }

}
