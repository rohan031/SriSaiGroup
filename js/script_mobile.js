$(document).ready(function () {

    let $side = $("#sidebar");
    let $main = $("#container");
    $("#sideOpen").click(function () {
        $side.css("display", "block");
        $side.css("width", "65%");
        $side.css("right", "0");
        $main.css("opacity", "0.3");
        $main.addClass("not-active");
    });

    $("#sideClose").click(function () {
        $side.css("width", "0");
        $side.css("right", "-100%");
        $main.css("opacity", "1");
        $main.removeClass("not-active");
    });

    $(".sidebarLinks").click(function () {
        $side.css("width", "0");
        $side.css("right", "-100%");
        $main.css("opacity", "1");
        $main.removeClass("not-active");
    });
})