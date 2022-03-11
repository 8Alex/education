let apiKey = "OeEeoTEpl7sESVcvr89fuuBug712gt14";

document.addEventListener("DOMContentLoaded", function (event) {
    searchGif();
});

function searchGif() {
    document.getElementById("btn").addEventListener("click", event => {
        event.preventDefault();

        let gifName = document.getElementById("search").value;
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=5&offset=0&q=` + gifName;
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(list => {
                for (let i = 0; i < list.data.length; i++) {
                    createGif(list.data[i])
                }
            })
            .catch(err => console.log(err));
    })
}

function createGif(gif) {
    let img = document.createElement("img");
    img.src = gif.images.downsized.url;
    let container = document.querySelector(".containerGif");
    container.appendChild(img);
}