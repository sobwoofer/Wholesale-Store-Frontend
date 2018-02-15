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
                    $('.level2', thisItem).show(50);
                } else {
                    $('.level2', thisItem).hide(50);
                }
            }
        }, 200);
    });
    window.menuGrid = false;
    $('.level2 > li').hover(function () {
        var thisItem = this;
        setTimeout(function () {
            if ($(thisItem).is(":hover") || $(thisItem).hasClass('active')) {
                $(thisItem).toggleClass('active');

                if ($(thisItem).hasClass('active')) {
                    $('.sub_menu', thisItem).show();
                    console.log('sub menu toggle');
                    // if (menuGrid){
                    //     $('.grid').masonry('destroy');
                    // }
                    if (window.menuGrid) {
                        $('.grid').masonry('destroy');
                    }

                    window.menuGrid = $('.grid').masonry({
                        columnWidth: 280,
                        itemSelector: '.item',
                        isFitWidth: true,
                    });
                } else {
                    setTimeout(function(){
                        if (!$(thisItem).is(":hover").length){
                            $('.sub_menu', thisItem).hide();
                        }
                    }, 20);

                }

            }
        }, 300);
    });
});