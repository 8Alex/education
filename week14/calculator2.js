function calcSum() {
  const number1 = Number(document.getElementById("number1").value);
  const number2 = Number(document.getElementById("number2").value);
  const result = number1 + number2;
  document.getElementById("resultSum").value=result;
}

  function calcSub() {
    const number3 = Number(document.getElementById("number3").value);
    const number4 = Number(document.getElementById("number4").value);
    const result = number3 - number4;
    document.getElementById("resultSub").value=result;
  }

  function calcMul() {
  const number5 = Number(document.getElementById("number5").value);
  const number6 = Number(document.getElementById("number6").value);
  const result = number5 * number6;
  document.getElementById("resultMul").value=result;
}

function calcDiv() {
  const number7 = Number(document.getElementById("number7").value);
  const number8 = Number(document.getElementById("number8").value);
  const result = number7 / number8;
  document.getElementById("resultDiv").value=result;
}