require('../lib/gmu.js');

var newStyle = document.createElement('style');

var fonts = [
    {
        fontUrl: '../fonts/icomoon.ttf?ezlitq',
        fontFormat: 'truetype'
    },
    {
        fontUrl: '../fonts/icomoon.woff?ezlitq',
        fontFormat: 'woff'
    },
    {
        fontUrl: '../fonts/icomoon.svg?ezlitq#icomoon',
        fontFormat: 'svg'
    }
];

var fontFace = '@font-face { ' +
    'font-family:' + 'icomoon' + '; ' +
    'src: url(' + fontUrl + ') format(' + fontFormat + ');' +
'font-weight: normal;font-style: normal;}';

newStyle.appendChild(document.createTextNode());

document.head.appendChild(newStyle);

love_num = parseInt($('.love-num').text());
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
