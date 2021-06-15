window.onresize = function(event) {
    document.location.reload(true);
}


    var href = window.location.href.split("/")
    var html_location = href[href.length - 1]

    if (window.innerWidth > 1024 && html_location !== "index.html") {
        window.location = "index.html";
    }

    if (window.innerWidth <= 1024 && html_location !== "index_mobile.html") {
        window.location = "index_mobile.html";
    }
