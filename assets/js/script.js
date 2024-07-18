
let imageList = [
    "assets/img/01.webp",
    "assets/img/02.webp",
    "assets/img/03.webp",
    "assets/img/04.webp",
    "assets/img/05.webp",
];

const previewsContainer = document.getElementById("previews");
const prvsButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
let imgTag = document.querySelector("img");

let i = 0;

refreshPreviewList(); // Inizializza immagini preview

prvsButton.addEventListener("click", function() {

    if (i == 0) {
        i = imageList.length - 1;
    } else {
        i--;
    }

    imgTag.outerHTML = '<img src=' + '"' + imageList[i] + '">'
    imgTag = document.querySelector("img");
    refreshPreviewList(); // Refresha la preview dando il filtro blur alle immagini non selezionate;
})

nextButton.addEventListener("click", function() {

    if (i == imageList.length - 1) {
        i = 0;
    } else {
        i++;
    }

    imgTag.outerHTML = '<img src=' + '"' + imageList[i] + '">'
    imgTag = document.querySelector("img");

    refreshPreviewList(); // Refresha la preview dando il filtro blur alle immagini non selezionate;


})

function refreshPreviewList(){
    previewsContainer.innerHTML = "";
    for(let k=0; k < imageList.length; k++) {

        if(k!=i){
            previewsContainer.innerHTML += "<img src='" + imageList[k] + "' class='not-selected'>";
        } else {
            previewsContainer.innerHTML += "<img src='" + imageList[k] + "'>";
        }
    
    }
}

