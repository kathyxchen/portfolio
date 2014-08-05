(function ($) {

	$('document').ready(function() {
		$('h3#pf-skills').click(function () {
			$('#pf-tagcloud').load("./tagadelic_taxonomy ul.tag-cloud");
		});
	});

})(jQuery);