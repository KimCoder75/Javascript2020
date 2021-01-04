/*jshint -W030,-W033,-W119,-W104*/
/*jshint expr:true*/

const _v = {
  hasError: false,
  isValidPassword: false,
  emailPattern:/^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/

};

function formValidation(form, notifica){
  _v.form = document.querySelector(`${form}`);
  // _v.formElements = document.querySelector(`${form}`).elements
  _v.notificationItem = document.querySelector(`${notifica}`);
  _v.passwordStrength = document.querySelectorAll('#password> span');
  _v.formItems = Array.from(_v.form.elements);
  // console.log('formElements',_v.formElements);
  // console.log('_v.form.elements',_v.form.elements);
  // console.log('_v.passwordStrength',_v.passwordStrength);
  // console.log('_v.formItems',_v.formItems);

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
    requiredFields();
    // controllo tutti i campi obbligatori siano compilati
    isValidEmail();
  // controllare che la mail sia valida
    checkPassword();
    // controllo validità password
    // password e conferma password siano uguali

    _v.notificationItem.textContent='La registrazione è avvenuta correttamente.'
    resetForm();
      //controlli superati
  } catch (e) {
    _v.notificationItem.textContent = e.message;
  }
}

//------------------------------------------------------------------------------

function requiredFields(){
  let error;
  _v.hasError = false;
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
  if (_v.hasError) {
    throw new Error('Compilare i campi obbligatori');
  }
}

function isValidEmail(){
  if (!(_v.emailPattern.test(_v.form.email.value))) {
    throw new Error('Email indicata non valida');
  }
}

function checkPassword(){
  const
  pwd = _v.form.password.value,
  re_pwd = _v.form.re_password.value;

  if (!_v.isValidPassword) {
    throw new Error('La password non è valida.');
  }
  if (pwd !== re_pwd) {
    throw new Error('Le password non coincidono.');
  }
}

//------------------------------------------------------------------------------

/*
* 8 caratteri -> valida ma non sicura -> attivo il primo span
* 9 caratteri di cui almeno 2 numeri -> valida mediamente sicura -> attivo il secondo span
* 10 caratteri di cui almeno 2 caratteri speciali  -> valida e molto sicura -> attivo il terzo span
*/
function checkPasswordStrength(){
  _v.form.password.addEventListener('keyup', (e)=>{
    const isValid = {
      isLow: false,
      isHigh: false
    },
    pwd = e.target.value,
    letPattern = /[a-zA-Z]/,
    numPattern = /[0-9]/g,
    symbPattern = /[!"£\$%\/\&\(\)=\?\^*\-+<>\*\\|#]/g;

    resetPasswordStrength();

    if (pwd.length >= 8) {
      _v.passwordStrength[0].classList.add('active');
      if (regexCount(numPattern, pwd) >= 2 && pwd.length >= 9){
        _v.passwordStrength[1].classList.add('active');
        isValid.isLow = true;
        if (regexCount(symbPattern, pwd) >= 2 && pwd.length >= 10)  {
          _v.passwordStrength[2].classList.add('active');
          isValid.isHigh = true;
        }
      }
    }
    _v.isValidPassword = (isValid.isLow || isValid.isLow) ? true : false;
  });
}

function regexCount(pattern, password){
  return (password.match(pattern) || []).length;
}


function resetForm(){
  _v.form.reset();
  resetPasswordStrength();
  _v.formItems.forEach((item) => {
    item.classList.remove('error');
  });

}

function resetPasswordStrength(){
  _v.passwordStrength.forEach(span => {
    span.classList.remove('active');
  });
}

export default formValidation;
