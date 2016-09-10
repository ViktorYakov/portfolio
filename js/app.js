var flipper = $('.flipper');
var button = $('.button');
var button1 = $('.button1');
var popup = $('.popup');

$(document).ready(function(){

	flipper.click(function() {
		$(this).toggleClass("flip");
		$('.button , .button1').click(function() {
			flipper.removeClass("flip");
		});

		if(!flipper.hasClass('flip')) {
			popup.removeClass('show');
		 }
	}); //End of the click function

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
  if($(this).scrollTop() > 185 && window.matchMedia('(max-width: 767px)').matches) {
     $('.indexHeader').css({
       'position': 'fixed',  
       'width': '100vw',
       'z-index': '200000',
       'opacity': '0.8'
     }),
     $('.indexHeader').css({
        'position': 'fixed',
        'width': '100vw',
        'z-index': '200000',
        'top': '0',
        'opacity': '0.8'
     });
   } else {
        $('.indexHeader').css({
        	'position': 'relative',
        	'opacity': '1'
    	});
        $('.indexHeader').css({
            'position': 'relative',
            'top': '0',
            'opacity': '1',
     });    
   }
});