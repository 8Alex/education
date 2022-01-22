let click = false;

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
    checks = checkElement("name") && checks;
    checks = checkElement("lastName") && checks;
    checks = checkElement("phone") && checks;
    checks = checkElement("email") && checks;
    checks = checkElement("password") && checks;
    checks = checkElement("password_repeat") && checks;
    checks = checkboxCheck() && checks;
    checks = messageError() && checks;
    showMessage(checks);
}


function checkElement(id) {
    let element = document.getElementById(id);

    if (element.value == "") {
        element.style.border = "2px solid red";
        return false;
    } else {
        element.style.border = "2px solid black";
        return true;
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

function messageError() {
    let password = document.getElementById("password");
    let passwordRepeat = document.getElementById("password_repeat")

    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("error").innerHTML = "";

    if (password.value.length > 0 && password.value.length <= 5) {
        document.getElementById("errorMessage").innerHTML += "Your password is too short.";
        return false;
    }
    if (passwordRepeat.value != password.value) {
        document.getElementById("error").innerHTML += "Password mismatch.";
        return false;
    }
    return true;
}

function showMessage(checks) {
    let helloName = document.getElementById("name").value;

    if (checks == true) {
        alert(`Welcome,${helloName}!`);
    }
}