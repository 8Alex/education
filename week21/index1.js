postButton = document.getElementById("btn");
let base64String = "";

postButton.onclick = function (e) {
    e.preventDefault();

    fetch("https:httpbin.org/post", {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));
}

function imageUploaded() {
    var file = document.querySelector(
        'input[type=file]')['files'][0];

    var reader = new FileReader();

    reader.onload = function () {
        base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");

        console.log(base64String);
    }
    reader.readAsDataURL(file);
}