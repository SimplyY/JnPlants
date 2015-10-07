function loaded() {
    var myScroll = new IScroll('.s-scroller', {
        mouseWheel: true,
        scrollbars: true
    });

    var mycroll = new IScroll('.c-scroller', {
        mouseWheel: true,
        scrollbars: true
    });
}

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);
