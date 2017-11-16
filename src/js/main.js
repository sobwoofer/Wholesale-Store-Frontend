window.currentSlide = "brand_i_1";


$(function () {

    $('.brands-sl-item').click(function() {
        var t = $(this).data("id");
        if (window.currentSlide != t){
            window.currentSlide = t;
            $('.brands-item').slideUp(300);
            $('.brands-items').find("[data-id='" + t + "']").slideDown(300);
        }
    });

    $('.brands-sl').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        centerMode: true,
        //centerPadding: '0px',
        variableWidth: true,
        focusOnSelect: true
    });




});


//anchor script
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-100
        }, 500, 'swing', function () {
            // window.location.hash = $(target).offset().top+120;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop()+200;
    $('.navbar-nav a[href^="#"]').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}