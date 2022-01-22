getElementValue = (id) => {
    return Number(document.getElementById(id).value);
}

function calcSum() {
    const number1 = getElementValue("number1");
    const number2 = getElementValue("number2");
    const result = number1 + number2;
    document.getElementById("resultSum").value = result;
}

function calcSub() {
    const number3 = getElementValue("number3");
    const number4 = getElementValue("number4");
    const result = number3 - number4;
    document.getElementById("resultSub").value = result;
}

function calcMul() {
    const number5 = getElementValue("number5");
    const number6 = getElementValue("number6");
    const result = number5 * number6;
    document.getElementById("resultMul").value = result;
}

function calcDiv() {
    const number7 = getElementValue("number7");
    const number8 = getElementValue("number8");
    if (number8 == 0) {
        alert("На ноль делить нельзя!");
    }
    const result = number7 / number8;
    document.getElementById("resultDiv").value = result;
}