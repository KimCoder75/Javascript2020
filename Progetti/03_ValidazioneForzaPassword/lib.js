/*jshint -W030,-W033,-W119,-W104*/
/*jshint expr:true*/

const _v = {
  hasError: false,
  isValidPassword: false,
  emailPattern:'/^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/'

};

function formValidation(form, notifica){
  _v.form = document.querySelector(`${form}`);
  _v.notificationItem = document.querySelector(`${notifica}`);
  _v.passwordStrength = document.querySelectorAll('#password > span');
  _v.formItems = Array.from(_v.form.elements);
  submitForm();
  checkPasswordStrength();
}

function submitForm(){
  _v.form.addEventListener('submit',(e)=>{
    e.stopPropagation();
    e.preventDefault();
    checkValidation();
  }, true);
}

function checkValidation(){
  try {
    // controllo tutti i campi obbligatori siano compilati
    requiredFields();
    // controllare che la mail sia valida
    isValidEmail();
    // controllo validità password
    // password e conferma password siano uguali
    checkPassword();
    //controlli superati
    _v.notificationItem.textContent='La registrazione è avvenuta correttamente.'
  } catch (e) {
    v.notificationItem.textContent=e.message;

  }
}

function requiredFields(){
  let error;
  _v.formItems.forEach(item => {
    error = false;
    if (item.type !== 'checkbox' && item.required && item.value ==='') {
      error = true;
    }
    if (item.type === 'checkbox' && item.required && !item.checked) {
      error = true;
    }
    if (error) {
      _v.hasError = true;
      item.classList.add('error');

    }

  });

}
/*
* 8 caratteri -> valida ma non sicura -> attivo il primo span
* 8 caratteri + un simbolo -> valida mediamente sicura -> attivo il secondo span
* 10 caratteri + almento due caratteri speciali  -> valida e molto sicura -> attivo il terzo span
*/
function checkPasswordStrength(){
  _v.form.password.addEventListener('keyup', (e)=>{
    const isValid = {
      isLow: false,
      isHigh: false
    },
    pwd = e.target.value;
    _v.passwordStrength.forEach(span => {
      span.classList.remove('active');
      console.log(span.classList);
    });

    if (pwd.length >= 8) {
      _v.passwordStrength[0].classList.add('active');
      if (regexCount(/[!"£$%/&()=?^*-+<>]/g, pwd) === 1) {
        _v.passwordStrength[1].classList.add('active');
      }
      isValid.isLow = true;
    }

    if (pwd.length >= 10 && (regexCount(/[!"£$%/&()=?^*-+<>]/g, pwd) >= 2)) {
      _v.passwordStrength[0].classList.add('active');
      _v.passwordStrength[1].classList.add('active');
      _v.passwordStrength[2].classList.add('active');
      isValid.isHigh = true;
    }
    _v.isValidPassword = (isValid.isLow || isValid.isLow) ? true : false;

  });
}

function regexCount(pattern, password){
  return (password.match(pattern) || []).length;
}


export default formValidation;
