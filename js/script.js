$(document).ready(function() {

var stickyNavTop = $('.top-bar').offset().top;
$(".top-bar").wrap('<div class="nav-placeholder"></div>');
$(".nav-placeholder").height($("nav").outerHeight);

var stickyNav = function(){
var scrollTop = $(window).scrollTop();

if (scrollTop > stickyNavTop) {
    $('.top-bar').addClass('sticky');
} else {
    $('.top-bar').removeClass('sticky');
}
};

stickyNav();

$(window).scroll(function() {
    stickyNav();
});
});
