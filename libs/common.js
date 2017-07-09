$(document).ready(function() {
	$(".menu-s").click(function() {
		$(".menu").slideToggle(500);
	});

	$(window).resize(function() {
		if ($(window).width() > 669) {
			$(".menu").removeAttr("style");
		}
	});
});