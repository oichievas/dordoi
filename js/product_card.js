$(document).ready(function() {

	$('.card').delay(1800).queue(function(next) {
		$(this).removeClass('hover');
		$('a.hover').removeClass('hover');
		next();
	});

	$('.slider').css('background-position', '0px ' + 190 + 'px');

	$('#nav_categories_dropdown_container').hover(function(e){
		$('#nav_categories_dropdown_container').dropdown('show');
	}, function(e){
		$('#nav_categories_dropdown_container').dropdown('hide');
	});

	$('#nav_categories_link').on('click', function() {
		location.href = $(this).attr('href');
	});

});
