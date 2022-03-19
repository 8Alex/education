const shrink_btn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");

let activeIndex;

shrink_btn.addEventListener("click", () => {
    document.body.classList.toggle("shrink");
    setTimeout(moveActiveTab, 400);

    shrink_btn.classList.add("hovered");

    setTimeout(() => {
        shrink_btn.classList.remove("hovered");
    }, 500);
});

search.addEventListener("click", () => {
    document.body.classList.remove("shrink");
    search.lastElementChild.focus();
});

function moveActiveTab() {
    let topPosition = activeIndex * 58 + 2.5;

    if (activeIndex > 3) {
        topPosition += shortcuts.clientHeight;
    }

    active_tab.style.top = `${topPosition}px`;
}

function changeLink() {
    sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
    this.classList.add("active");

    activeIndex = this.dataset.active;

    moveActiveTab();
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

function showTooltip() {
    let tooltip = this.parentNode.lastElementChild;
    let spans = tooltip.children;
    let tooltipIndex = this.dataset.tooltip;

    Array.from(spans).forEach((sp) => sp.classList.remove("show"));
    spans[tooltipIndex].classList.add("show");

    tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}

tooltip_elements.forEach((elem) => {
    elem.addEventListener("mouseover", showTooltip);
});

let tasks = [];
let errors = [];

let addTask = document.getElementById("btn");

document.addEventListener("DOMContentLoaded", function (event) {
    let exercise = localStorage.getItem('exercise');

    if (exercise != null && !(exercise.length == 0)) {
        tasks = exercise.split("#");
        generateTask();
    }
});

function generateTask() {
    let optionsString = "";
    for (let task of tasks) {
        optionsString +=
            `<div class="task">
            <span>${task}</span>
            <button class="delete">
            <i class='bx bx-trash'></i>
            </button>
        </div>`;
    }
    document.getElementById("container").innerHTML = optionsString;

    let currentTasks = document.querySelectorAll(".delete");
    for (var i = 0; i < currentTasks.length; i++) {
        currentTasks[i].onclick = function () {
            this.parentNode.remove();
            tasks.splice(currentTasks[i], 1);
            console.log(tasks);
            let tasksDelete = tasks.join("#");
            localStorage.setItem('exercise', tasksDelete);
        }
    }
}

addTask.onclick = function () {
    checkAll();

    if (errors.length == 0) {
        let message = document.getElementById("item").value;
        tasks.push(message);

        generateTask();
        let tasksString = tasks.join("#");
        localStorage.setItem('exercise', tasksString);
    }
}

function checkValidity(input) {
    let valid = document.getElementById("item").value;

    if (valid.length == 0) {
        errors.push('Заполните поле');
    }
}

function checkAll() {
    errors = [];
    let input = document.getElementById("item");

    checkValidity(input);

    let errorDiv = document.getElementById('error');
    errorDiv.innerHTML = errors.join('. \n');
}

const Chart = require('chart.js');
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut', 'Sun'],
        datasets: [{
            label: 'Сompleted tasks',
            data: [3, 6, 5, 8, 4, 5, 2, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var Calendar = require('tui-calendar');

var calendar = new Calendar('#calendar', {
    defaultView: 'month',
    taskView: true,
    template: {
        monthGridHeader: function (model) {
            var date = new Date(model.date);
            var template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
            return template;
        }
    }
});

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};

let serializedMyChart = JSON.stringify(myChart, getCircularReplacer());
console.log(serializedMyChart);