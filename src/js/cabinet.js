//left menu
$.fn.extend({
    treed: function (o) {

        var openedClass = 'fa fa-minus';
        var closedClass = 'fa fa-plus';

        if (typeof o != 'undefined'){
            if (typeof o.openedClass != 'undefined'){
                openedClass = o.openedClass;
            }
            if (typeof o.closedClass != 'undefined'){
                closedClass = o.closedClass;
            }
        };

        //initialize each of the top levels
        var tree = $(this);
        tree.addClass("tree");
        tree.find('li').has("ul").each(function () {
            var branch = $(this); //li with children ul
            branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
            branch.addClass('branch');
            branch.on('click', function (e) {
                if (this == e.target) {
                    var icon = $(this).children('i:first');
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            })
            branch.children().children().toggle();
        });
        //fire event from the dynamically added icon
        tree.find('.branch .indicator').each(function(){
            $(this).on('click', function () {
                $(this).closest('li').click();
            });
        });
        //fire event to open branch if the li contains an anchor instead of text
        // tree.find('.branch>a').each(function () {
        //     $(this).on('click', function (e) {
        //         $(this).closest('li').click();
        //         e.preventDefault();
        //     });
        // });
        //fire event to open branch if the li contains a button instead of text
        tree.find('.branch>button').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
    }
});

//Initialization of treeviews

$(function () {
    $('#tree1').treed();

    $('#tree2').treed({openedClass:'glyphicon-folder-open', closedClass:'glyphicon-folder-close'});

    $('#tree3').treed({openedClass:'glyphicon-chevron-right', closedClass:'glyphicon-chevron-down'});
});



//Tooltip plugin
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

//Start Flash Timer
$(function () {
    $("#DateCountdown").TimeCircles();
});

//filter
$(function () {
    $('.filter_cat_wrp .toggle-btn').click(function (e) {
        $($(this).parent().parent('.filter_cat_wrp')).toggleClass('active')
    });
    $('#showFilter').click(function (e) {
        $('.catalog-filter').slideToggle()
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



//menu button
$(function () {
    $('.catalog-btn').click(function (e) {
        $('.second-menu .catalog').toggleClass('active')
    });
});

//= source/mobile-catalog.js