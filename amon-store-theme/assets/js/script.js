/*!
 * Documenter 2.0
 * http://rxa.li/documenter
 *
 * Copyright 2011, Xaver Birsak
 * http://revaxarts.com
 *
 */
 
$(document).ready(function() {
	$(".view-image .btn-view-image").click(function() {
       	$(this).parent().parent(".view-image").toggleClass("active");
    });
});