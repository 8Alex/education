let showInputs = document.querySelector('.textForm');

function createInput(id, name) {
    if (document.getElementById(id) != null) {
        return;
    }

    let input = document.createElement("input");
    input.type = "text";
    input.id = id;

    let label = document.createElement('label');
    label.textContent = name;
    label.setAttribute("for", input.id);

    document.getElementById('form').appendChild(label);
    label.appendChild(input);
}

showInputs.oninput = function () {
    createInput("lastname", "Фамилия:");
    createInput("firstname", "Имя:");
    createInput("patronymic", "Отчество:");
    inputValue();
}


function inputValue() {
    let value = document.getElementById("fullName").value;

    let array = value.split(" ");

    let fullname = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] == "") {
            continue;
        }
        let elem = array[i].toLowerCase();
        elem = elem.trim();
        elem = elem[0].toUpperCase() + elem.slice(1);

        fullname.push(elem);


        // array[i] = array[i].toLowerCase();
        // array[i] = array[i].trim();
        // array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }

    lastName = fullname[0];
    firstName = fullname[1];
    patronymic = fullname[2];

    // lastName = array[0];
    // firstName = array[1];
    // patronymic = array[2];

    document.getElementById("lastname").value = lastName;
    document.getElementById("firstname").value = firstName;
    document.getElementById("patronymic").value = patronymic;
}