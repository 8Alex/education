let container = document.getElementById("newComment");

let showMessage = document.querySelector(".btn");

let avatar = document.getElementById("avatar");

let filters = ["viagra", "xxx"];



document.addEventListener("DOMContentLoaded", function (event) {
    let nickname = localStorage.getItem('nickname');
    let messages = localStorage.getItem('messages');

    if (nickname != null) {
        document.getElementById("name").value = nickname;
    }
    if (messages != null) {
        container.innerHTML = messages;
    }
});


let photo = document.getElementById('photo');

function createElement() {
    let comment = checkSpam(document.getElementById("comment").value);
    let nick = document.getElementById("name").value;
    let photo = document.getElementById('photo');
    let message = document.createElement("span");
    let messageText = document.createTextNode(comment);
    message.appendChild(messageText);


    let autor = document.createElement("span");
    let autorText = document.createTextNode(nick + ": ");
    autor.appendChild(autorText);

    let spacer = document.createElement("br");

    let outputImage = document.createElement("IMG");
    outputImage.classList.add("imgSize")
    outputImage.src = avatar.src;

    container.appendChild(outputImage);
    container.appendChild(autor);
    container.appendChild(message);
    container.appendChild(spacer);

    localStorage.setItem('nickname', nick);
}



function readImage(file) {
    if (file.type && !file.type.startsWith('image/')) {
        console.log('File is not an image.', file.type, file);
        return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        avatar.src = event.target.result;
    });
    reader.readAsDataURL(file);
}


document.getElementById('photo').addEventListener('change', event => {
    let file = event.target.files[0];
    readImage(file);
});



showMessage.onclick = function () {
    createElement();

    localStorage.setItem('messages', container.innerHTML);
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