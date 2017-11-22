$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('#home a[href^="#"]').on('click', function (e) {
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
    console.log($('#home').length);

    //TODO you should to change link text to your homepage in the var @newText before move this code to production
    if ($('#home').length <= 0) {
        $('#navbarNav .nav-item a.anchor').each(function (count, item) {
           var hrefText = $(item).attr('href');
           var newText = '/web-site/index.html' + hrefText;
            $(item).attr('href', newText);
            console.log(item);
        });
    }

});


function onScroll(event){
    var scrollPos = $(document).scrollTop()+200;
    $('#home .navbar-nav a[href^="#"]').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#home .navbar-nav ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}