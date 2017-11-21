$(function () {
    $('.filter_cat_wrp .toggle-btn').click(function (e) {
        $($(this).parent().parent('.filter_cat_wrp')).toggleClass('active')
    });


    $("#slider-range").slider({
        min: 0,
        max: 1000,
        values: [0, 1000],
        range: true,
        stop: function (event, ui) {
            $("input#minCost").val($("#slider-range").slider("values", 0));
            $("input#maxCost").val($("#slider-range").slider("values", 1));
        },
        slide: function (event, ui) {
            $("input#minCost").val($("#slider-range").slider("values", 0));
            $("input#maxCost").val($("#slider-range").slider("values", 1));
        }
    });
});