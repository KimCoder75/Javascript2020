let nomi = ["Yoda","Maestro Miyagi","Hoogway"],
    divSection = document.getElementById('section1').children;

for (var i = 0; i < divSection.length; i++) {
  divSection[i].innerText = nomi[i];
  console.log(divSection[i].innerText);
}

console.log(divSection);
