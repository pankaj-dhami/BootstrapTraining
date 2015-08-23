$(function () {

    $(window).on("load resize", function () {

        $(".fill-screen").css("height", window.innerHeight);
    });

    //$("#video-wallpaper").wallpaper({
    //    source: {
    //        //poster: "./Images/4.jpg",
    //        //webm: "http://example.com/video.webm",
    //        //mp4: "C:/sers/pankaj/Downloads/Suits.S05E08.HDTV.x264-KILLERS[ettv]/Suits.S05E08.HDTV.x264-KILLERS.mp4",
    //        //ogg: "http://example.com/video.ogv"
    //        video: "//www.youtube.com/embed/q51ld-scMI8"
    //    }
    //});

    $('body').scrollspy({
        target: '.navbar',
        offset: 0
    });

    //$('nav a, .down-button a').bind("click", function (e) {
    //    $("html, body").stop().animate({
    //        scrollTop: $($(this).attr("href")).offset().top - 100
    //    }, 1500, "easeInOutExpo");
    //    e.preventDefault();
    //});
    //parallex scrolling
    $(window).stellar();
    var arr = ['#top', '#Sights', '#Sports', '#Activites', '#Contact']
    var index = 0;
    $('#moveNext').click(function () {
        $("html, body").stop().animate({
            scrollTop: $(arr[index]).offset().top - 100
        }, 1500, "easeInOutExpo");

        index++;

        if (arr.length == index) {
            index = 0;
        }
    });
});