function background() {
    if (document.getElementById("dropdown").value == "light")
        document.body.style.backgroundColor = "#FFFFFF";

    if (document.getElementById("dropdown").value == "dark")
        document.body.style.backgroundColor = "#377A85";

    if (document.getElementById("dropdown").value == "bright")
        document.body.style.backgroundColor = "#FFA1ED";
}