$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        // navigation : true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true

    });

    // var navOffset = $(".top-bar").offset().top;
    //
    // $(".top-bar").wrap('<div class="nav-placeholder"></div>');
    // $(".nav-placeholder").height($(".top-bar").outerHeight);
    //
    // $(window).scroll(function() {
    //     var scrollPos = $(window).scrollTop();
    //
    //     if (scrollPos >= navOffset) {
    //         $(".top-bar").addClass("fixed");
    //     } else {
    //         $(".top-bar").removeClass("fixed");
    //     }
    // });


});