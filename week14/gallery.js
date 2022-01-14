let btn_prev = document.querySelector('.buttons .prev');
let btn_next = document.querySelector('.buttons .next');
let images = document.querySelectorAll('.photos img');

let i = 0;


btn_next.onclick = function () {
    images[i].style.display = 'none';
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].style.display = 'block';
}

btn_prev.onclick = function () {
    images[i].style.display = 'none';
    i = i - 1;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}