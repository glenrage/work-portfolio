(function ($) {

	new WOW().init();

	$(window).load(function(){
      $("#navigation").sticky({ topSpacing: 0 });
    });

	jQuery(window).load(function() {
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});


	//parallax
        if ($('.parallax').length)
        {
			$(window).stellar({
				responsive:true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });

        }

})(jQuery);

//
// $('#contact-form').submit(function(event) {
// 	event.preventDefault();
// 	submitForm();
// })
//
// function submitForm() {
// 	console.log('hit')
// 	let name = $('#name').val()
// 	let email = $('#email').val()
// 	let subject = $('#subject').val()
// 	let message = $('#message').val()
//
// 	$.ajax({
// 		type:"POST",
// 		url: `${__dirname}/form-process.php`,
// 		 data: "name=" + name + "&email=" + email + "&message=" + message + "&subject=" + subject,
// 		 success : function(text){
// 				 if (text == "success"){
// 						 formSuccess();
// 				 }
// 		 }
//  });
// }
// function formSuccess(){
// 	console.log('email success')
// }
