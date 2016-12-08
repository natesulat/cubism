function drawSquares(startDark, width) {
    var boxWidth = width * 2;
    $('body').prepend('<div class="tuppu">');
    $('.tuppu').css({
        'width': boxWidth + 'px',
        'height': boxWidth + 'px'
    });
    for (i = 17; i > startDark; i--) {
        var color = Math.floor(255 / 16) * i,
            rgbC = 'rgb(' + color + ', ' + color + ', ' + color + ')',
            border = width + 'px solid ' + rgbC;
        console.log(color);
        $('body').find('div').eq(0).wrap('<div>').css({
            'border': border
        });
    }
}
drawSquares(1, 20);
