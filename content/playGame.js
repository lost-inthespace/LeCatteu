let imageIndex = 0;
const ImgPlayHideAndSneak = ['LetsPlay1.JPG', 'letsPlay2.JPG', 'lts3.jpg', 'lts4.jpg', 'lts5.jpg'];

function changeImageHAS() {
    const image = document.getElementById("image");
    image.src = ImgPlayHideAndSneak[imageIndex];
}

function nextImageHAS() {
    if (imageIndex < ImgPlayHideAndSneak.length){
        imageIndex++;
        if (imageIndex === 3) {
            document.getElementById("continueBtn").style.display = "none";
            gameRole()
        }
        changeImageHAS();
    }
}

function gameRole() {
    const image = document.getElementById("image");
    const map = document.createElement("map");
    map.innerHTML = '<area shape="rect" coords="220, 357, 358, 533.5" href="javascript:showContinueButton();" id="specificArea">';
    image.useMap = "#imageMap";
    image.insertAdjacentElement('afterend', map);
    document.getElementById("specificArea").addEventListener("click", function () {
        imageIndex++;
        if (imageIndex >= ImgPlayHideAndSneak.length) {
            imageIndex = 0;
        }
        changeImageHAS();
        showContinueButton();
    });
}

function showContinueButton() {
    document.getElementById("continueBtn").style.display = "block";
}