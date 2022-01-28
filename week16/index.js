sumInput();

function sumInput() {
    let arr = [];

    requestParams();
    outSorted();
    outSum();

    function callInput() {
        return +prompt("Значение");
    }

    function requestParams() {
        let param;
        do {
            param = callInput();
            arr.push(param);
        }
        while (param != "" && !isNaN(param));
        arr.pop();
        console.log(arr);
    }

    function outSorted() {
        arr.sort();
        alert(arr);
    }

    function outSum() {
        let sum = 0;
        for (let numb of arr) {
            sum = sum + numb;
        }
        alert(sum);
    }
}