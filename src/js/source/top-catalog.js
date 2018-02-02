//menu button
$(function () {
    $('.catalog-btn').click(function (e) {
        $('.second-menu .catalog').toggleClass('active')
    });
});


//menu worker
$(function () {
    $('.menu > li').hover(function () {
        var thisItem = this;
        setTimeout(function () {
            if ($(thisItem).is(":hover") || $(thisItem).hasClass('active')) {
                $(thisItem).toggleClass('active');
                if ($(thisItem).hasClass('active')) {
                    $('.level2', thisItem).show('fast');
                } else {
                    $('.level2', thisItem).hide('fast');
                }
            }
        }, 200);
    });
});