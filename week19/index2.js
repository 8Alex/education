let createObject = document.getElementById("btn");
let imagesObject = [];

class Cat {
    constructor(nickname, name, phone, breed, food, gender, comment, photo) {
        this.nickname = nickname;
        this.name = name;
        this.phone = phone;
        this.breed = breed;
        this.food = food;
        this.gender = gender;
        this.comment = comment;
        this.photo = photo;
    }
}

createObject.onclick = function () {
    let nickname = document.getElementById("nickname").value;
    let yourName = document.getElementById("yourName").value;
    let phone = document.getElementById("phone").value;
    let breed = document.getElementById("breed").value;
    let food = getCheckedCheckBoxes();
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let comment = document.getElementById("text").value;
    let photo = imagesObject;

    let cat1 = new Cat(nickname, yourName, phone, breed, food, gender, comment, photo);
    console.log(cat1);
}

function getCheckedCheckBoxes() {
    let checkboxes = document.getElementsByName('food');
    let checkboxesChecked = [];

    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].value);
        }
    }

    return checkboxesChecked;
}

function handleFileSelect(evt) {
    let files = evt.target.files;

    for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
            continue;
        }

        let reader = new FileReader();

        reader.onload = function (e) {
            addImage(e.target.result);
        };

        reader.readAsDataURL(f);
    }
}

function addImage(imgData) {
    imagesObject.push(imgData);
}

document.getElementById('files').addEventListener('change', handleFileSelect);