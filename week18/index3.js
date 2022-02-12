let tasks = [];

let errors = [];

document.addEventListener("DOMContentLoaded", function (event) {
    let exercise = localStorage.getItem('exercise');

    if (exercise != null) {
        tasks = exercise.split("#");
        generateTask();
    }
});

function generateTask() {
    let optionsString = "";
    for (let task of tasks) {
        optionsString += `<div><input type="checkbox" onchange="finishTask(this)"><span>${task}</span></div>`;
    }
    document.getElementById("container").innerHTML = optionsString;
}

function addTask() {
    checkAll();

    if (errors.length == 0) {
        let message = document.getElementById("item").value;
        tasks.push(message);

        generateTask();
        let tasksString = tasks.join("#");
        localStorage.setItem('exercise', tasksString);
    }
}

function finishTask(sender) {
    sender.parentElement.classList.toggle("done");
}


function checkValidity(input) {
    let validity = input.validity;

    if (validity.valueMissing) {
        errors.push('Заполните поле');
    }
}

function checkAll() {
    errors = [];
    let input = document.querySelector("input");

    checkValidity(input);

    let errorDiv = document.getElementById('error');
    errorDiv.innerHTML = errors.join('. \n');
}