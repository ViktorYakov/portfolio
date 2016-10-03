var flipper = $('.flipper');
var button = $('.button');
var button1 = $('.button1');
var popup = $('.popup');
var indexHeader = $('.indexHeader');

$(document).ready(function(){

    flipper.click(function() {
        $(this).toggleClass("flip");
        $('.button , .button1').click(function() {
            flipper.removeClass("flip");
        });

        if(!flipper.hasClass('flip')) {
            popup.removeClass('show');
         }
    }); 

    flipper.mouseleave(function() {
        if(flipper.hasClass('flip')) {
            $(this).toggleClass("flip");
            popup.removeClass('show');
        }
    });

    button1.on('click', function() {
        popup.toggleClass('show');
    });
});

$(document).scroll(function() {
  if($(this).scrollTop() > 1 && window.matchMedia('(max-width: 767px)').matches) {
     $('.indexHeader').css({
       'z-index': '2',
       'opacity': '0.8'
        });
     
     $('.indexHeader').addClass('hidden');
   } else {
        $('.indexHeader').css({
            'opacity': '1'
        });
        $('.indexHeader').removeClass('hidden');
   }
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 1 && window.matchMedia('(max-width: 767px)').matches) {       
        $('.returnToTop').fadeIn(200);
    } else {
        $('.returnToTop').fadeOut(200);
    }
});
$('.returnToTop').click(function() {     
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});


