jQuery.noConflict();

(function($) {
    $(function () {
        $('#btn').click(function () {
            $('.popup').fadeIn(400);

            $("body").animate({scrollTop:$("#list").offset().top - 50},600,function(){
                $('.popup').fadeOut(1500);
            });
        });
    });

}(jQuery))
