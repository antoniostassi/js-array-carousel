
let imageList = [
    "assets/img/01.webp",
    "assets/img/02.webp",
    "assets/img/03.webp",
    "assets/img/04.webp",
    "assets/img/05.webp",
];

const prvsButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
let imgTag = document.querySelector("img");

let i = 0;

prvsButton.addEventListener("click", function() {

    if (i == 0) {
        i = 4;
    } else {
        i--;
    }
    // console.log(imageList[i]);
    imgTag.outerHTML = '<img src=' + '"' + imageList[i] + '">'
    imgTag = document.querySelector("img");
})

nextButton.addEventListener("click", function() {

    if (i == 4) {
        i = 0;
    } else {
        i++;
    }
    // console.log(imageList[i]);
    imgTag.outerHTML = '<img src=' + '"' + imageList[i] + '">'
    imgTag = document.querySelector("img");

})