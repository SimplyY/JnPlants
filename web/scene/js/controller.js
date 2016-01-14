require('../lib/gmu.js');

module.exports = {
    'back':back,
    'paddingSceneInfo': paddingSceneInfo,
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

function paddingSceneInfo(scene) {
    $('.top-img').attr('src', scene.imgUrl);
    $('.title').html(markdown.toHTML('##' + scene.title));
    $('.author').html(markdown.toHTML('- 投稿作者：' + scene.authorName));
    $('.location').html(markdown.toHTML('- 美景地点：' + scene.location));
    $('.month').html(markdown.toHTML('- 美景时间：' + scene.month.toString() + '月'));
    $('#article').html(markdown.toHTML(scene.article));

    $('#love-num').text(scene.loversAmount);
    $('#com-num').text(scene.commentsIds.length);
}

function setClickLoveEvent(scene, user, setLoveInServer) {
    // init click state
    var isClicked = false;
    // judge by server user data
    if (user && $.inArray(scene._id, user.loveScenesIds) > -1) {
        isClicked = true;
        setLoveIcon($('#love-icon'), isClicked);
    }

    $('#love-icon').tap(function() {
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
            scene.loversAmount += 1;
        } else {
            setLoveIcon($love, isClicked);
            scene.loversAmount -= 1;
        }

        $('.love-num').text(scene.loversAmount);

        setLoveInServer(scene.loversAmount, isClicked);
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
    $('#comment-icon').tap(function() {
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
