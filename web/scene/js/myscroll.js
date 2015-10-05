function loaded() {
    var myScroll = new IScroll('.wrapper', {
        mouseWheel: true,
        scrollbars: true
    });
}

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);
