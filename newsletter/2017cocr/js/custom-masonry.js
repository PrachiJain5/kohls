// external js: masonry.pkgd.js

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

$(document).ready(function() {
	$(window).load(function() {
		$('.layout-cards img.card-img').responsify();
	});
});
$(window).resize(function() {
	$('.layout-cards img.card-img').responsify();
})