$(document).ready(function() {
	$(".button-fancy-single").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
	});
	
	$(".button-fancy-video").fancybox({
		/* maxWidth	: 800,
		maxHeight	: 600, */
		fitToView	: true,
		/* width		: '70%',
		height		: '70%', */
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'fade',
		closeEffect	: 'fade'
	});
});