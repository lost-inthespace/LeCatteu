let imageIndexX = 0;
const ImgSad = ['lookSad.JPG', 'here.JPG', 'makeufeelWell.jpg'];

function changeImageSad() {
    const image = document.getElementById("imageee");
    image.src = ImgSad[imageIndexX];
}

function nextImageSad() {
    if (imageIndexX < ImgSad.length){
        changeImageSad();
        imageIndexX++;
    }
    else{
        document.getElementById("continueBtn").style.display = "none";
    }
}
