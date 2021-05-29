$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1250:{
            items:3
        }
    }
})