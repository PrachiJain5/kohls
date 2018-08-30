// JavaScript Document
//$('.dd-nav-item').dropdownHover().dropdown();
$(document).ready(function() {
	if ($('.eq').length) {
		$(function() {
			$('.eq').matchHeight();
		});
	}
	if ($('.app-pad').length) {
		$(function() {
			$('.app-pad').matchHeight();
		});
	}
	if ($('.qwerty').length) {
		$(function() {
			$('.qwerty').matchHeight();
		});
	}
	$('[data-toggle="offcanvas"]').click(function() {
		$('.row-offcanvas').toggleClass('active')
	});
	$('.notebox .media-body p:last-child').addClass('last');
	$('.collapse').on('shown.bs.collapse', function() {
		$(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
	}).on('hidden.bs.collapse', function() {
		$(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
	});
    //expand accordion on page load based on hash
    var idToToggle = window.location.hash.replace("#", "");
    $("#" + idToToggle ).collapse('show');

	    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
        //var currentTab = $(e.target).attr('class'); // get current tab
		var currentTabParent = $(e.target).parent(); // get current tab's parent
        //var lastTab = $(e.relatedTarget).attr('class'); // get last tab
		//var lastTabParent = $(e.relatedTarget).parent(); // get last tab's parent

        $(currentTabParent).siblings().addClass('inactive');
        //$(lastTabParent).siblings().removeClass('sibs');
    });

    // Closing active tab when clicking on toggle:
    $('[data-toggle=tab]').click(function(){
        if ($(this).parent().hasClass('active')){
            $($(this).attr("href")).toggleClass('active');
            active = null;
			$(this).parent().siblings().toggleClass('inactive');
        } else {
            tabClicked = true;
            active = this;
        }
    });
	
	
	
	
	
});