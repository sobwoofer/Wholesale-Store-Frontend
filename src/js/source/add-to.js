//popover
//===============
// ADD TO CART NOTICE
// You can do .popover show/hide for some products who added to cart.
// and also you can change content in popover to actuality.
//==============
$(function () {

    //for example
    $('.cart-btn, .wishlist-btn').on('click', function () {
        var thisButton = $(this);
        thisButton.popover('show');

        setTimeout(function () {
            thisButton.popover('hide');
        }, 1500);
    });


    $('.cart-btn').popover({
        title: 'Товар добавлен в корзину',
        html: true,
        content: 'Товаров в корзине: 14<br>Сума: 1258 грн<br><a href="#">Перейти в корзину</a>',
        trigger: 'manual'
    });

    $('.wishlist-btn').popover({
        title: 'Товар добавлен в избранное',
        html: true,
        content: 'Товаров в избранном: 14<br><a href="#">Перейти в избранное</a>',
        trigger: 'manual'
    });
});