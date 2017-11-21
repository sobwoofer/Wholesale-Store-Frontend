//left menu
//= source/left-catalog-menu.js


//Tooltip plugin
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

//Start Flash Timer
$(function () {
    $("#DateCountdown").TimeCircles();
});

//filter
//= source/catalog-filter.js

//side show hide
$(function () {
    $('#showSide').click(function (e) {
        $('.side-content').slideToggle()
    });
});

//live search dropdown
$(function () {
    $('.search-input').click(function () {
        $(this).toggleClass('act');
        $('.top-serch-block--result').toggleClass('act');
    });
});


//menu button
$(function () {
    $('.catalog-btn').click(function (e) {
        $('.second-menu .catalog').toggleClass('active')
    });
});

//= source/mobile-catalog.js