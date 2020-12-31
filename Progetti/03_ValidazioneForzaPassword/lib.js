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

function submitForm(){}
/*
* 8 caratteri -> valida ma non sicura -> attivo il primo span
* 8 caratteri + un simbolo -> valida mediamente sicura -> attivo il secondo span
* 10 caratteri + almento due caratteri speciali  -> valida e molto sicura -> attivo il terzo span
*/
function checkPasswordStrength(){
  _v.form.password.addEventListener('keyup', (e)=>{
    const isValid = {
      isLow: false,
      isHight: false
    },
    pwd = e.target.value;
    _v.passwordStrength.forEach(span => {
      span.classList.remove('active');
      console.log(span.classList);
    });
    
    if (pwd.length >= 8) {
      _v.passwordStrength[0].classList.add('active');
      if (regexCount(/[!"£$%&(=)?]/g, pwd) === 1) {
        _v.passwordStrength[1].classList.add('active');
      }
      isValid.isLow = true;
    }

    if (pwd.length >= 10 && (regexCount(/[!"£$%&(=)?]/g, pwd) >= 2)) {
      _v.passwordStrength[0].classList.add('active');
      _v.passwordStrength[1].classList.add('active');
      _v.passwordStrength[2].classList.add('active');
      isValid.isLow = false;
      isValid.isHight = true;
    }

  });
}

function regexCount(pattern, password){
  return (password.match(pattern) || []).length;
}


export default formValidation;
