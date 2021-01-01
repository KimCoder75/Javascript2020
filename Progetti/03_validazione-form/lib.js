const _v = { 
    hasError : false,
    isValidPassword: false,
    emailPattern : /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

function formValidation(form, notifica) {    
    _v.form = document.querySelector(`${form}`);
    _v.notificationItem = document.querySelector(`${notifica}`);    
    _v.pwdStrengthColor = document.querySelectorAll('#password > span');
    _v.formItems = Array.from(_v.form.elements);   
    passwordStrength();
    submitForm();
}

function submitForm() {     
    _v.form.addEventListener('submit', (e) => {
        e.stopPropagation();
        e.preventDefault();
        checkValidation();        
    }, true);
}

function checkValidation() { 
    try {
        //Controllo il completamento dei campi obbligatori
        requiredFields();

        //Controllo correttezza email
        isValidEmail();

        //Controllo validità password e corrispondenza con conferma
        checkPassword();

        //Controlli superati. Invio form (non implementato) e notifica
        _v.notificationItem.className = 'notification-success';
        _v.notificationItem.textContent = 'La registrazione è avvenuta correttamente.';
        resetForm();
    } catch(e) {
        _v.notificationItem.className = 'notification-error';
        _v.notificationItem.textContent = e.message;
        //console.dir(e);
    }
    
}

function requiredFields() {
    let error;
    _v.hasError = false;
    _v.formItems.forEach(item => {
        error = false;
        if (item.type !== "checkbox" && item.value === "" && item.required) {
            error = true;
        }
        if (item.type === "checkbox" && item.required && !item.checked) {
            error = true
        }
        if (error && item.type !== "submit") {
            _v.hasError = true;
            item.classList.add("error");            
        }
    });
    if(_v.hasError) {
        throw new Error('Compilare i campi obbligatori.');
    }
}

function isValidEmail() {
    if (!_v.emailPattern.test(_v.form.email.value)) {
        throw new Error('Email indicata non valida');
    }
}

/*
 * password valida (attivazione rosso): almeno 8 caratteri
 * password mediamente sicura (attivazione arancione): almeno 8 caratteri, con almeno un carattere speciale
 * password molto sicura (attivazione verde): almeno 10 caratteri, con due caratteri speciali e almeno una lettera in maiuscolo
*/
function passwordStrength() {    
    _v.form.password.addEventListener('keyup', (e) => {
        let isValid = {
            low: false,
            high: false
        },
        pwd = e.target.value;
        resetStrength();
        if(pwd.length >= 8) {
            _v.pwdStrengthColor[0].classList.add('active');
            if (regexCount(/[&?!%]/g, pwd) > 0) {
                _v.pwdStrengthColor[1].classList.add('active');
            }  
            isValid.low = true;
        } 
        if (pwd.length >= 10 && regexCount(/[&?!%]/g, pwd) > 1 && regexCount(/[A-Z]/g, pwd) > 0) {
            _v.pwdStrengthColor.forEach((item) => {
                item.classList.add('active');
            });
            isValid.high = true;            
        }
        _v.isValidPassword = (isValid.low || isValid.high) ? true : false;
    });
}

function resetStrength() {
    _v.pwdStrengthColor.forEach((item) => {
        item.classList.remove('active');
    });
}

function regexCount(pattern, stringa) {
    return (stringa.match(pattern) || []).length;
}

function checkPassword() {
    const password = _v.form.password.value,
        re_password = _v.form.re_password.value;

    if(!_v.isValidPassword) {
        throw new Error('Password non valida');
    }
    if (password !== re_password) {
        throw new Error('Password e conferma password non coincidono');
    }
}

function resetForm() {    
    resetStrength();
    _v.form.reset();
    _v.formItems.forEach(item => {
        item.classList.remove("error");
    });   
}

export default formValidation;