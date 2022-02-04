let buttonGenerate = document.querySelector('.btn');

let arr = [];

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}

buttonGenerate.onclick = function () {
    fillArray();
    minNumber();
    maxNumber();
    average();
    sumArr();
    multiplication();
}

function fillArray() {
    arr = [];

    for (i = 0; i < 10; i++) {
        arr.push(randomInteger(-10, 10));
    }
    document.getElementById("result").innerText = `Сгенерировали: ${arr}`;
}

function minNumber() {
    let min = Math.min(...arr);

    document.getElementById("minNum").innerText = `Минимальное значение: ${min}`;
}

function maxNumber() {
    let max = Math.max(...arr);

    document.getElementById("maxNum").innerText = `Максимальное значение: ${max}`;
}

function average() {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let av = sum / arr.length;

    document.getElementById("avNum").innerText = `Среднее арифметическое значение: ${av}`;
}

function sumArr() {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    document.getElementById("sumNum").innerText = `Сумма чисел: ${sum}`;
}

function multiplication() {
    let mult = 1;

    for (let i = 0; i < arr.length; i++) {
        mult *= arr[i];
    }

    document.getElementById("multNum").innerText = `Произведение чисел: ${mult}`;
}