var modalOverlay = document.getElementById("modal-overlay");
var modalClose = document.getElementById("modal-close");
var modalNext = document.getElementById("modal-next");
var modalPrev = document.getElementById("modal-prev");
var modalImg = document.getElementById("modal-img");
var modalDes = document.getElementById("modal-description");
var imageClicked=null;
var page_imgs = document.getElementById("main-content").querySelectorAll("img:not(#modal-content)");

var openModal = function (img) {
    // When an image is clicked, put its source in the modal and display it
    // console.log("click open");
    // console.log(img.src);
    // img.classList.add('active-modal');
    imageClicked = img;
    modalImg.src = img.src;
    modalDes.innerHTML = img.alt;
    modalOverlay.classList.add('active');
    //modalOverlay.classList.add('add-bg');
}

var closeModal = function () {
    modalOverlay.classList.remove('active');
    imageClicked=null;
    //modalOverlay.classList.remove('add-bg');
}

var nextImage = function () {

    if (imageClicked){
        var img_found;
        var next_img_idx;
        for (i=0;i<page_imgs.length;i++){
            if (page_imgs[i].id == imageClicked.id){
                img_found = page_imgs[i];
                if ((i+1)>=0 & (i+1)<page_imgs.length){
                    page_imgs[i+1].click();
                }
                break
            }
        }
    }
}

var prevImage = function () {
    if (imageClicked){
        var img_found;
        var next_img_idx;
        for (i=0;i<page_imgs.length;i++){
            if (page_imgs[i].id == imageClicked.id){
                img_found = page_imgs[i];
                if ((i-1)>=0 & (i-1)<page_imgs.length){
                    page_imgs[i-1].click();
                }
                break
            }
        }
    }
}



window.onload = function () {
    // Get all elements inside the page-content
    var page_imgs = document.getElementById("main-content").querySelectorAll("img:not(#modal-content)");
    // Add click opener to every image
    for (var i = 0; i < page_imgs.length; i++) {
        page_imgs[i].id=i;
        page_imgs[i].addEventListener('click', function () { openModal(this) });
        page_imgs[i].addEventListener("mouseover", function () { this.style.cursor = "zoom-in" })
    }
}

modalClose.addEventListener('click', closeModal);
modalImg.addEventListener('click', closeModal);
modalNext.addEventListener('click', nextImage);
modalPrev.addEventListener('click', prevImage);

document.addEventListener('keyup', function (e) {
    // Close the image modal if ESC is pressed
    var key = e.key || e.keyCode;
    if (key == 'Escape' || key == 'Esc' || key == 27) {
        closeModal();
    }
    else if ((e.keyCode || e.which) == 39) {
        nextImage();
    }
    else if ((e.keyCode || e.which) == 37) {
        prevImage();
    }
}
)