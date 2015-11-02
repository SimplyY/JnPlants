(function() {
    var love_num = parseInt($('.love-num').text());
    var isClicked = false;
    var currentpage = $('#scene-page');

    $('.love').tap(function() {
        if (isClicked === false) {
            $(this).removeClass('icon-heart-o').addClass('icon-heart').css('color', '#fdacc9');
            love_num = love_num + 1;
            $('.love-num').text(love_num);
            isClicked = true;
        } else if (isClicked === true) {
            $(this).removeClass('icon-heart').addClass('icon-heart-o').css('color', '#ffffff');

            love_num = love_num - 1;
            $('.love-num').text(love_num);
            isClicked = false;
        }
    });

    var mc = new Hammer.Manager(document.getElementById('scene-content'));
    mc.add(new Hammer.Swipe({ velocity: 0.05, threshold: 0 }));

    mc.on('swiperight', function(ev) {
        console.log(ev);
        window.back.back();
    });
})();
