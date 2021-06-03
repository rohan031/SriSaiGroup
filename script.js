$(document).ready(function() {

    let $active = $("#bbusiness, #aaboutUs, #ccommunity");
    $active.click(function () {
        $active.addClass("active");
        $active.removeClass("active");

        $(this).addClass("active");
    });

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

});







