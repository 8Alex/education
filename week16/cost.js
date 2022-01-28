let selectBrand = document.getElementById("brand");
let selectYear = document.getElementById("year");
let gasolineFuel = document.getElementById("gasoline");
let dieselFuel = document.getElementById("diesel");
let manualTransmission = document.getElementById("manual");
let automaticTransmission = document.getElementById("automatic");
let rearDrive = document.getElementById("rear");
let frontWheelDrive = document.getElementById("front-wheel");
let fourWheelDrive = document.getElementById("four-wheel");
let checkboxesAdditional = document.querySelectorAll('input[type=checkbox]');
let btn = document.querySelector(".button");


let arr = [0, 0, 0, 0, 0, 0, 0];

function optionsCheck(source, arrayPos) {
    source.onchange = function (element) {
        const elVal = element.target.value;

        arr[arrayPos] = Number(elVal);
        sumCar();
    }
}

// selectBrand.onchange = function (element) {
//     const brand = element.target.value;
//     console.log(brand);

//     arr[0] = Number(brand);
//     sumCar();
// }


// document.addEventListener('DOMContentLoaded', () => {
//     const val = selectBrand;
//     val.addEventListener("change", element => {
//         const brand = element.target.value;
//         console.log(brand);

//         arr[0] = Number(brand);
//         sumCar();
//     });
// });

optionsCheck(selectBrand, 0);

// selectYear.onchange = function (element) {
//     const year = element.target.value;
//     console.log(year);

//     arr[1] = Number(year);
//     sumCar();
// }

optionsCheck(selectYear, 1);

// gasolineFuel.onchange = function (element) {
//     const gasoline = element.target.value;
//     console.log(gasoline);

//     arr[2] = Number(gasoline);
//     sumCar();
// }

optionsCheck(gasolineFuel, 2);

// dieselFuel.onchange = function (element) {
//     const diesel = element.target.value;
//     console.log(diesel);

//     arr[2] = Number(diesel);
//     sumCar();
// }

optionsCheck(dieselFuel, 2);

// manualTransmission.onchange = function (element) {
//     const manual = element.target.value;
//     console.log(manual);

//     arr[3] = Number(manual);
//     sumCar();
// }

optionsCheck(manualTransmission, 3);

// automaticTransmission.onchange = function (element) {
//     const automatic = element.target.value;
//     console.log(automatic);

//     arr[3] = Number(automatic);
//     sumCar();
// }

optionsCheck(automaticTransmission, 3);

// rearDrive.onchange = function (element) {
//     const rear = element.target.value;
//     console.log(rear);

//     arr[4] = Number(rear);
//     sumCar();
// }

optionsCheck(rearDrive, 4);

// frontWheelDrive.onchange = function (element) {
//     const frontWheel = element.target.value;
//     console.log(frontWheel);

//     arr[4] = Number(frontWheel);
//     sumCar();
// }

optionsCheck(frontWheelDrive, 4);

// fourWheelDrive.onchange = function (element) {
//     const fourWheel = element.target.value;
//     console.log(fourWheel);

//     arr[4] = Number(fourWheel);
//     sumCar();
// }

optionsCheck(fourWheelDrive, 4);


for (let checkbox of checkboxesAdditional) {
    checkbox.onchange = function (element) {
        if (element.target.checked) {
            arr[6] = arr[6] + Number(element.target.value);
        } else {
            arr[6] = arr[6] - Number(element.target.value);
        }
        sumCar();
    }
}


function sumCar() {
    let sum = 0;
    for (let numb of arr) {
        sum = sum + numb;
    }
    console.log(sum);

    document.getElementById("total").innerText = `Итоговая стоимость: ${sum}`;
}


btn.onclick = function () {
    sumCar();
}