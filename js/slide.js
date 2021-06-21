// class for all gallery functions
class slideShowImages {
    constructor(id, imgClass) {
        this.slideIndex = 0;
        this.imgCont = document.getElementById(id);
        this.i = 0;
        this.slides = document.getElementsByClassName(imgClass);
        this.slideShow(this.slideIndex);
        this.otherHide = document.getElementById("container");
        this.nav = document.getElementById("navbar");
    }

    show() {
        this.imgCont.style.display = "block";
        this.otherHide.style.opacity = "0.1";
        this.otherHide.style.pointerEvents = "none";
        this.nav.style.opacity = "0";
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
        this.otherHide.style.opacity = "1";
        this.otherHide.style.pointerEvents = "auto";
        this.nav.style.opacity = "1";
        //document.body.style.background = "none";
    }
}

// group housing development
let ghd = new slideShowImages("groupHousingDevelopment", "ghdSlideShow");

// brokerage
let brkage = new slideShowImages("brokerage", "brokerageSlideShow");

// entertainment and hospitality
let ent = new slideShowImages("eah", "eahSlideShow");

// information technology and media
let it = new slideShowImages("itm", "itmSlideShow");



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