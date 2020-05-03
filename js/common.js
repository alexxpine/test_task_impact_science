$(document).ready(function () {

    $('.JS-info-slider').slick({
        arrows: false,
        autoplay: false,
        swipe: true,
        asNavFor: '.JS-background-slider'
    });

    $('.JS-background-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        asNavFor: '.JS-info-slider',
        cssEase: 'linear'
    });
});