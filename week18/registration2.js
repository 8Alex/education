let click = false;
let errors = [];

buttonCheck = () => {
    click = true;
    check();

}

inputCheck = () => {
    if (click == true) {
        check();
    }
}

function check() {
    let checks = true;
    checks = checkboxCheck() && checks;
    checkAll();
    checks = checkErrors() && checks;
    showMessage(checks);
}

function borderColor(element, valid) {
    if (valid) {
        element.style.border = "2px solid black";
    } else {
        element.style.border = "2px solid red";
    }
}


function checkboxCheck() {
    let elementCheckbox = document.getElementById("terms");

    if (elementCheckbox.checked == false) {
        elementCheckbox.style.outline = "1px solid red";
        return false;
    } else {
        elementCheckbox.style.outline = "1px solid black";
        return true;
    }
}


function checkValidity(element) {
    let validity = element.validity;
    let valid = true;

    if (validity.typeMismatch) {
        addError('Invalid fill format');
        valid = false;
    }

    if (validity.valueMissing) {
        addError('Required field');
        valid = false;
    }

    if (validity.tooShort) {
        let min = element.minLength;
        addError('The maximum value cannot be greater than ' + min);
        valid = false;
    }

    if (validity.tooLong) {
        let max = element.maxLength;
        addError('The minimum value cannot be greater than' + max);
        valid = false;
    }
    borderColor(element, valid);
}

function validatePassword(element) {
    let passwordFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;

    if (element.value.length > 0 && !element.value.match(passwordFormat)) {
        addError('Your password is not secure');
        borderColor(element, false);
    } else if (element.value != element.value) {
        addError('Password mismatch');
        borderColor(element, false);
    }
}

function validateEmail(element) {
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    if (element.value.length > 0 && !element.value.match(mailFormat)) {
        addError('Email address entered incorrectly');
        borderColor(element, false);
    }
}

function validatePhone(element) {
    let phoneFormat = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

    if (element.value.length > 0 && !element.value.match(phoneFormat)) {
        addError('Phone number entered incorrectly');
        borderColor(element, false);
    }
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {

        if (input.type == "checkbox") {
            continue;
        }

        checkValidity(input);

        if (input.type == "password") {
            validatePassword(input);
        }

        if (input.id == "email") {
            validateEmail(input);
        }

        if (input.type == "tel") {
            validatePhone(input);
        }
    }

    let errorDiv = document.getElementById('errorMessage');
    errorDiv.innerHTML = errors.join('. \n');
}


function checkErrors() {
    return errors.length == 0;
}

function showMessage(checks) {
    let helloName = document.getElementById("name").value;

    if (checks == true) {
        alert(`Welcome,${helloName}!`);
    }
}

function addError(message) {
    if (!errors.includes(message)) {
        errors.push(message);
    }
}