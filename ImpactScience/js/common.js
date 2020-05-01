$(document).ready(function () {

    $('.JS-info-slider').slick({
        arrows: false,
        autoplay: true,
        swipe: true,
        asNavFor: '.JS-background-slider'
    });

    $('.JS-background-slider').slick({
        dots: true,
        infinite: true,
        swipe: true,
        asNavFor: '.JS-info-slider',
        arrows: false,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});