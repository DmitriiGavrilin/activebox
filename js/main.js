$(function (){

    // Fixed Header ++++++++++++++++++++++++++
    var header = $('#header');
    var intro = $('#intro');
    var introH = intro.innerHeight();
    var scrollPosition = $(window).scrollTop();
    checkScroll(scrollPosition, introH);

    $(window).on("scroll resize", function(){
        introH = intro.innerHeight();
        scrollPosition = $(this).scrollTop();
        checkScroll(scrollPosition, introH);
    });

    function checkScroll() {
        if (scrollPosition > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth Scroll ++++++++++++++++++++++++++
    $("[data-scroll]").on("click", function(e){
        var elId = $(this).data('scroll');
        var elOffset = $(elId).offset().top;
        nav.removeClass('show');
        $('html, body').animate({
            scrollTop: elOffset - 60
        }, 900)
        e.preventDefault();
    });


    // Burger Menu ++++++++++++++++++++++++++
    var nav = $('#nav');
    var navToggle = $('#navToggle');

    navToggle.on('click', function(e){
        nav.toggleClass('show');
        e.preventDefault();
    });


    // Slider ++++++++++++++++++++++++++

    var slider = $('#testimonialsSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    })
});
