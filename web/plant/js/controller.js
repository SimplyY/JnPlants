require('../lib/gmu.js');

module.exports = {
    'back':back,
    'paddingplantInfo': paddingplantInfo,
    'setClickLoveEvent': setClickLoveEvent,
    'setClickCommentEvent': setClickCommentEvent,
    'setClickMapEvent': setClickMapEvent
};

function back() {
    var mc = new Hammer.Manager(document.getElementById('scene-page'));
    mc.add(new Hammer.Swipe({ velocity: 0.05, threshold: 0 ,direction:Hammer.DIRECTION_HORIZONTAL}));

    mc.on('swiperight', function(ev) {
        console.log(ev);
        window.android.back();
    });
}

function paddingplantInfo(plant) {
    $('.top-img').attr('src', plant.imgUrl);
    $('.title').html(markdown.toHTML('##' + plant.name));
    $('#article').html(markdown.toHTML(plant.article));

    $('#love-num').text(plant.loversAmount);
    $('#com-num').text(plant.commentsIds.length);
}

function setClickLoveEvent(plant, user, setLoveInServer) {
    // init click state
    var isClicked = false;
    // judge by server user data
    if (user && $.inArray(plant._id, user.lovePlantsIds) > -1) {
        isClicked = true;
        setLoveIcon($('#love-icon'), isClicked);
    }

    $('#love-icon').on('click', function() {
        //  对未登录时，点击收藏的提示
        if (window.android && !user) {
            window.android.webToast('请先登录');
            return;
        }

        var $love = $(this);
        setLoveState($love);
    });

    function setLoveState($love) {
        isClicked = !isClicked;

        if (isClicked) {
            setLoveIcon($love, isClicked);
            plant.loversAmount += 1;
        } else {
            setLoveIcon($love, isClicked);
            plant.loversAmount -= 1;
        }

        $('.love-num').text(plant.loversAmount);

        setLoveInServer(plant.loversAmount, isClicked);
    }

    function setLoveIcon($love, isClicked) {
        if (isClicked) {
            $love.removeClass('icon-heart-o').addClass('icon-heart').css('color', '#fdacc9');
        } else {
            $love.removeClass('icon-heart').addClass('icon-heart-o').css('color', '#ffffff');
        }
    }
}

function setClickCommentEvent() {
    $('#comment-icon').on('click', function() {
        if (!window.android) {
            return;
        }
        window.android.enterComment();
    });
}

function setClickMapEvent() {
    $('#map').tap(function () {
        if (!window.android) {
            return;
        }
        window.android.enterMap();
    });
}
