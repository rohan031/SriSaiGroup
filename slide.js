// class for all gallery functions
class slideShowImages {
    constructor(id, imgClass) {
        this.slideIndex = 0;
        this.imgCont = document.getElementById(id);
        this.i = 0;
        this.slides = document.getElementsByClassName(imgClass);
        this.slideShow(this.slideIndex);
        this.otherHide = document.getElementById("gallery");
    }

    show() {
        this.imgCont.style.display = "block";
        this.otherHide.style.display = "none";
        //document.body.style.backgroundImage = "url('img/gallery/gallery_background.jpg')";
    }

    slideShow(n) {
        if (n >= this.slides.length) {
            this.slideIndex = 0;
        }

        if (n < 0) {
            this.slideIndex = this.slides.length - 1;
        }

        for (this.i = 0; this.i < this.slides.length; ++this.i) {
            this.slides[this.i].style.display = "none";
        }

        this.slides[this.slideIndex].style.display = "block";
    }


    nextPrev(n) {
        this.slideShow(this.slideIndex += n);
    }

    hide() {
        this.imgCont.style.display = "none";
        this.otherHide.style.display = "block";
        //document.body.style.background = "none";
    }
}

// mangalya gallery
let ng = new slideShowImages ("ng", "ngSlideShow"); // for novena green
let op = new slideShowImages ("op", "opSlideShow"); // for opira
let more = new slideShowImages ("mangMore", "moreSlideShow") // for more

//lab realty
let lab = new slideShowImages ("llab", "labSlideShow");



/*
addEventListener("click", function(e) {
    // novena green
    if ((document.getElementById("nng").contains(e.target)) || (e.target.classList.contains("prevNext"))) {
        ng.show();
    }
    else {
        ng.hide();
    }


    // opira
    if ((document.getElementById("oop").contains(e.target)) || (e.target.classList.contains("prevNext"))) {
        op.show();
    }
    else {
        op.hide();
    }



    // more
   if ((document.getElementById("mmangMore").contains(e.target)) || (e.target.classList.contains("prevNext"))) {
        more.show();
    }
    else {
        more.hide();
    }


});
*/



/*
//slide show
let slideIndex = 0;
slideShow(slideIndex);

function nextPrev (n) {
    slideShow(slideIndex += n);
}


function slideShow (n) {
    let i; //for loop variable
    let slides = document.getElementsByClassName("ngSlideShow");

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; ++i) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}


// display the slideshow
function show(imgContId) {
    let imgCont = document.getElementById(imgContId);
    imgCont.style.display = "block";


}


// close the slideshow
function  disp() {
    let imgCont = document.getElementById("ng");
    imgCont.style.display = "none";
}
*/