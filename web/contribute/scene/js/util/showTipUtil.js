jQuery.noConflict();
(function($, window) {
    $(function () {
        window.showTipInfo = function (text) {
            // replace tip text
            $('.popup-content').find('p').html(text);
            $('.popup').fadeIn(400);

            if(text === "*^_^* 投稿成功"|text === "*^_^* 修改成功"|text === "请将信息填写完整"){
                $("body").animate({scrollTop:$("#list").offset().top - 50},600,function(){
                    $('.popup').fadeOut(2000);
                });
            } else {
                $('.popup').fadeOut(2000);
            }
        };
    });

}(jQuery, window));
