let showGif = document.getElementById("btn");

function getGif() {
    fetch("https://yesno.wtf/api")
        .then(response => response.json())
        .then(gif => {
            document.getElementById("gif").src = gif.image;
        })
        .catch(err => console.log(err));
}

showGif.onclick = function () {
    getGif();
}