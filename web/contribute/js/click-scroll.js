jQuery.noConflict();

jQuery(function () {
    jQuery('#btn').click(function () {
        jQuery('.popup').fadeIn(400);

        jQuery("body").animate({scrollTop:jQuery("#list").offset().top - 50},800,function(){
            jQuery('.popup').fadeOut(400);
        });
    });
});
