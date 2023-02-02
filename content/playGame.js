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
    map.name = "imageMap";
    const area = document.createElement("area");
    area.shape = "rect";
    area.coords = "220, 357, 358, 533.5";
    area.id = "specificArea";
    area.href = "javascript:showContinueButton();"
    map.appendChild(area);
    image.useMap = "#imageMap";
    image.parentNode.insertBefore(map, image.nextSibling);


    const specificArea = document.getElementById("specificArea");
    specificArea.addEventListener("click", function () {
        imageIndex++;
        if (imageIndex >= ImgPlayHideAndSneak.length) {
            imageIndex = 0;
        }
        changeImageHAS(ImgPlayHideAndSneak[imageIndex]);
        showContinueButton()
    });
}

function showContinueButton() {
    console.log(imageIndex);
    console.log(document.getElementById("continueBtn"));
    document.getElementById("continueBtn").style.display = "block";
    if(imageIndex === 3)
        document.getElementById("continueBtn").style.display = "block";
}
