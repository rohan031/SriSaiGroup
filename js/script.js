$(document).ready(function() {

    // onclick change active class in nav bar
    let $active = $("#bbusiness, #aaboutUs, #ccommunity, #ccontactUs, #ggallery");
    $active.click(function () {
        $active.addClass("active");
        $active.removeClass("active");

        $(this).addClass("active");
    });

    /*
    $("#community").mouseenter(function() {
        $active.addClass("active");
        $active.removeClass("active");

        $("#ccommunity").addClass("active");
    });

    $("#aboutUS").mouseenter(function() {
        $active.addClass("active");
        $active.removeClass("active");

        $("#aaboutUs").addClass("active");
    });

    $("#main").mouseenter(function() {
        $active.addClass("active");
        $active.removeClass("active");

        $("#bbusiness").addClass("active");
    });

    $("#contactUs").mouseenter(function() {
       $active.addClass("active");
       $active.removeClass("active");

       $("#ccontactUs").addClass("active");
    });
    */

    // onscroll change active class in navbar
    var screenHeight = $(window).height();
    var funCall = screenHeight * 0.4;
    var contactPos = $("#contactUs").offset().top - funCall;
    var aboutPos = $("#aboutUS").offset().top - funCall;
    var commPos = $("#community").offset().top - funCall;
    var bussPos = $("#main").offset().top - funCall;
    var gallPos = $("#galleryCont").offset().top - funCall;

    $(window).on("scroll", function(){
       var y = window.pageYOffset;
       if (y > contactPos) {
           $active.addClass("active");
           $active.removeClass("active");

           $("#ccontactUs").addClass("active");
           $("#footerContactUs").fadeIn("slow");
       }
       else if (y > gallPos) {
           $active.addClass("active");
           $active.removeClass("active");

           $("#ggallery").addClass("active");
           $("#footerContactUs").fadeOut("slow");
       }
       else if (y > commPos) {
           $active.addClass("active");
           $active.removeClass("active");

           $("#ccommunity").addClass("active");
           $("#footerContactUs").fadeOut("slow");
       }
       else if (y > aboutPos) {
           $active.addClass("active");
           $active.removeClass("active");

           $("#aaboutUs").addClass("active");
           $("#footerContactUs").fadeOut("slow");
       }
       else if (y > bussPos) {
           $active.addClass("active");
           $active.removeClass("active");

           $("#bbusiness").addClass("active");
           $("#footerContactUs").fadeOut("slow");
       }

    });

});







