(function($) {
    var love_num = parseInt($('.love-num').text());
    var isClicked = false;

    $('.love').tap(function() {
        if (isClicked === false) {
            $(this).removeClass('fa-heart-o').addClass('fa-heart').css('color', '#FF0033');

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
})($);
