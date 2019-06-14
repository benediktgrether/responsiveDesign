/*var window_width = $(window).width() - $('#hand_left').width();

var document_height = $(document).height() - $(window).height();

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_left = window_width * (scroll_position / document_height);
        $('#hand_left').css({
            'left': object_position_left
        });
    });
});*/



var $horizontal = $('#hori');
var $horizontal2 = $('#hori2');

var section1 = $('.section1');
/*var scrolltop = window.pageYOffset;


$horizontal.style.top = scrolltop * 1.3 + 'px';*/

$(window).scroll(function () {
    var s = $(this).scrollTop() ,
        d = $(window).height(),

    scrollPercent = (s / d)*2;

    var position = (scrollPercent * ($(document).width() - $horizontal.width())-600);
    var position1 = (scrollPercent * ($(document).width() - $horizontal2.width())-600);

/*
if (section1.offset().top - $(window).scrollTop() < -900){
$horizontal.css('top','0');
    $horizontal2.css('top','0');

}
    console.log(section1.offset().top - $(window).scrollTop());

*/
if (position < -220 ){
    $horizontal.css({
        'left': position
    });

}
    if (position < -220){

    $horizontal2.css({
        'right': position1
    });}
/*
    if(s>400){
        $heart.css({
            'OPACITY': '1'
        })

    }
    if(s<400){
        $heart.css({
            'opacity': '1'
        })
    }
*/
});



