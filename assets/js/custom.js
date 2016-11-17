/* ----- Custom Scripts for Kaline template ----- */

jQuery(function($) {
    "use strict";



/*----- Preloader ----- */

    $(window).load(function() {
    		setTimeout(function() {
            $('#loading').fadeOut('slow', function() {
            });
        }, 300);
    });


/* --------- Wow Init -------*/

new WOW().init();


$('.parallax').each(function(){ 
	var $obj = $(this); 
	$(window).scroll(function() { 
		var yPos = -($(window).scrollTop() / $obj.data('speed')); 
		var bgpos = '50% '+ yPos + 'px'; 
		$obj.css('background-position', bgpos );
		if($(window).width() <= 540) {
			var bgpos = '20% '+ yPos + 'px'; 
			$obj.css('background-position', bgpos );
		} else {
			var bgpos = '50% '+ yPos + 'px'; 
			$obj.css('background-position', bgpos );
		}
	}); 
});


/*----------------------------
------- Isotope Init -------
-----------------------------*/

$( window ).load(function() {

var $container = $('.portfolio-container');
$container.isotope({
	filter: '*',
});

$('.portfolio-filter a').on('click', function () {
	$('.portfolio-filter .active').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$container.isotope({
			filter: selector,
			animationOptions: {
					duration: 500,
					animationEngine: "jquery"
			}
	});
	return false;
});

});


});
