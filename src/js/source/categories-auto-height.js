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
        var remainder = jQueryElements.length% num;
        jQueryElements.each(function(i, e){
            sizes.push(parseInt($(e).height()));
            count.push(parseInt(i));
            if (jQueryElements.length - i <= remainder) {
                num = remainder;
            }
            if ( (i+1) % num == 0) {
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