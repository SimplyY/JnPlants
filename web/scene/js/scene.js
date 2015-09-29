(function($) {
    var love_num = parseInt($('.love-num').text());
    var isClicked = false;
    var currentpage = $('#scene-page');

    $('.love').tap(function() {
        if (isClicked === false) {
            $(this).removeClass('fa-heart-o').addClass('fa-heart').css('color', '#FF0066');

            love_num = love_num + 1;
            $('.love-num').text(love_num);
            isClicked = true;
        } else if (isClicked === true) {
            $(this).removeClass('fa-heart').addClass('fa-heart-o').css('color', '#ffffff');

            love_num = love_num - 1;
            $('.love-num').text(love_num);
            isClicked = false;
        }
    });

    $('#scene-page').css({
        'display': 'block',
        'transform': 'translateX(0)'
    });
    $('#comment-page').css({
        'display': 'block',
        'transform': 'translateX(100%)'
    });
    $('.comment').tap(function() {
        $('.view').css('transition', 'all 0.3s ease-in-out');
        $('#scene-page').css({
            'display': 'block',
            'transform': 'translateX(-100%)'
        });
        $('#comment-page').css({
            'display': 'block',
            'transform': 'translateX(0)'
        });
    })

})($);
