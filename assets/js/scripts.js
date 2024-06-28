var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$( document ).ready( function() {

	$('.test-card').slick({
		loop:true,
		centerMode: true,
		slidesToScroll: 1,
		variableWidth: true,
		slidesToShow: 1,
		dots:true,
		arrows: false,
		appendDots: $('.custom-dt'),
		adaptiveHeight:true,
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				variableWidth: false,
				centerMode: false,
			  }
			},
		]
	});

	$('.prev-btn').on('click', function(){
		$('.test-card').slick("slickPrev");
	});
	$('.next-btn').on('click', function(){
		$('.test-card').slick("slickNext");
	});

	$('.flip-card').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots:true,
		prevArrow:false,
		nextArrow:false,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 767,
			  settings: {				
				slidesToShow: 2
			  }
			},
			{
				breakpoint: 527,
				settings: {				
				  slidesToShow: 1
				}
			  }
			
		  ]
	  });
	  Fancybox.bind("[data-fancybox]",{
		// Your custom options
	});

	//do jQuery stuff when DOM is ready

	$(".contact-form .form-control input, .contact-form .form-control textarea").focus(function () {
		$(this).parent().addClass('focused');
	});
	$(".contact-form .form-control input, .contact-form .form-control textarea").blur(function () {
		var txtName = $(this).val();
		if (txtName) {
			$(this).parent().addClass('focused blured');
		} else {
			$(this).parent().removeClass('focused blured');
		}
	});

} );

/* Script on load
------------------------------------------------------------------------------*/
$( window ).on( 'load',function() {
	// page is fully loaded, including all frames, objects and images

} );

/* Script on scroll
------------------------------------------------------------------------------*/
$( window ).on( 'scroll',function() {

} );

/* Script on resize
------------------------------------------------------------------------------*/
$( window ).on( 'resize',function() {

} );

/* Script all functions
------------------------------------------------------------------------------*/
