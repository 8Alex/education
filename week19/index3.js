let calcSum = document.getElementById("resultSum");
let calcSub = document.getElementById("resultSub");
let calcMul = document.getElementById("resultMul");
let calcDiv = document.getElementById("resultDiv");

getElementValue = (id) => {
    return Number(document.getElementById(id).value);
}

class Calculator {
    static sum(number1, number2) {
        return number1 + number2;
    }

    static sub(number3, number4) {
        return number3 - number4;
    }

    static mul(number5, number6) {
        return number5 * number6;
    }

    static div(number7, number8) {
        return number7 / number8;
    }
}

calcSum.onclick = function () {
    const number1 = getElementValue("number1");
    const number2 = getElementValue("number2");

    let result = Calculator.sum(number1, number2);
    document.getElementById("resultSum").value = result;
}

calcSub.onclick = function () {
    const number3 = getElementValue("number3");
    const number4 = getElementValue("number4");

    let result = Calculator.sub(number3, number4);
    document.getElementById("resultSub").value = result;
}

calcMul.onclick = function () {
    const number5 = getElementValue("number5");
    const number6 = getElementValue("number6");

    let result = Calculator.mul(number5, number6);
    document.getElementById("resultMul").value = result;
}

calcDiv.onclick = function () {
    const number7 = getElementValue("number7");
    const number8 = getElementValue("number8");

    if (number8 === 0) {
        alert("На ноль делить нельзя!");
    }

    let result = Calculator.div(number7, number8);
    document.getElementById("resultDiv").value = result;
}