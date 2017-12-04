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


// add to cart and add to wish list
//= source/add-to.js

//= source/mobile-catalog.js

//categories border with auto row height
$(function(){
    if ($(window).width() > 991) {
        sortItemsTo(4, $('.categories .item'));
    } else if($(window).width() > 768 && $(window).width() <= 991) {
        sortItemsTo(3, $('.categories .item'));
    } else if($(window).width() > 575 && $(window).width() <= 768) {
        sortItemsTo(2, $('.categories .item'));
    }

    function sortItemsTo(num, jQueryElements) {
        var sizes = [];
        var count = [];
        var maxSize = 0;
        var remainder = jQueryElements.length%num;
        jQueryElements.each(function(i, e){
            sizes.push(parseInt($(e).height()));
            count.push(parseInt(i));
            if (jQueryElements.length - i <= remainder) {
                num = remainder;
            }
            if (i == 0 || (i+1)%num == 0) {
                maxSize = Math.max.apply(null, sizes);
                count.forEach(function (e, i){
                    $('.categories .item:nth-child(' + (e + 1) + ')').height(maxSize);
                });
                sizes = [];
                count = [];
                maxSize = 0
            }
        });
    }
});