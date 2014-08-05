(function ($) {

	$('document').ready(function() {
		console.log('hello world');
		$('h3#pf-skills').click(function () {
			$('#pf-tagcloud').load("/tagadelic_taxonomy ul.tag-cloud");
		});
	});

})(jQuery);