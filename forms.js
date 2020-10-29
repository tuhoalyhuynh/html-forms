const init = function() {
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
};

const reset = function(ev) {
    ev.preventDefault();
    document.getElementById('form-user').reset();
};

const validate = function() {
    let valid = false;
    let failures = [];

    const first = document.getElementById('input-first');
    const password = document.getElementById('input-password');
    const email = document.getElementById('input-email');
    const select = document.getElementById('input-age');
    const check = document.getElementById('input-alive');

    if (first.value === '') {
        failures.push({ input: 'input-first', msg: 'Required field'});
    }
    if (email.value === '' || !email.value.includes('@')) {
        failures.push({ input: 'input-email', msg: 'Required field'});
    }
    if (password.value === '' || password.value.length < 8) {
        failures.push({ input: 'input-password', msg: 'Must be at least 8 characters'});
    }
    if (select.selectedIndex === 0) {
        failures.push({ input: 'input-age', msg: 'Too young...'});
    }
    if (!check.checked) {
        failures.push({ input: 'input-alive', msg: 'Must be alive to submit form'});
    }
    
    console.log(failures);
    return failures;

};

const send = function(ev) {
    ev.preventDefault();
    
    let fails = validate();
    
    if (fails.length === 0) {
        document.getElementById('form-user').submit();
    } else {
        fails.forEach(obj => {
            const field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', 'obj.msg');
        })
    }
    
};

document.addEventListener('DOMContentloaded', init);

