let showMessage = document.querySelector(".btn");

let filters = ["viagra", "xxx"];

function createElement() {
    let comment = checkSpam(document.getElementById("comment").value);

    let elem = document.createElement("p");
    var elemText = document.createTextNode(comment);
    elem.appendChild(elemText);

    document.getElementById("newComment").appendChild(elem);
}

showMessage.onclick = function () {
    createElement();
}

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    for (let filter of filters) {
        if (lowerStr.includes(filter)) {
            lowerStr = lowerStr.replace(filter, "***");
        }
    }
    return lowerStr;
}