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
//= source/anchor-script.js


