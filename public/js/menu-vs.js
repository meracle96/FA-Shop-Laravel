
/** Mega menu **/
    $(window).load(function() {
        "use strict";
	    $("ul.engo-megamenu > li.dropdown").each(function () {
	        var dropdown        = $(this).children(".dropdown-menu");
	        var megamenu       = $("ul.engo-megamenu");
	        $(dropdown).css("right", "auto");

	        var dropdown_begin_mega = $(this).offset().left - megamenu.offset().left;
	        if($(this).hasClass('aligned-fullwindown')) {
	            var dropdown_begin = $(this).offset().left;
	            $(dropdown).css({'left':-dropdown_begin,'width':$(window).width()});
	        } else if($(this).hasClass('aligned-fullwidth')) {
	            $(dropdown).css({'left':-dropdown_begin_mega,'width':$(megamenu).outerWidth()});
	        } else if($(this).hasClass('aligned-right')) {
	            var dropdown_end_right = ($(megamenu).offset().left + $(megamenu).outerWidth()) - ($(this).offset().left + $(this).outerWidth()) ;
	            // console.log(dropdown_end_right);
	            $(dropdown).css({'right':-dropdown_end_right});
	        } else if($(this).hasClass('aligned-left')) {
	            $(dropdown).css({'left':-dropdown_begin_mega});
	        } else {
	            var end_right     = ($(window).width() - (dropdown.offset().left + dropdown.outerWidth()));
	            var end_right2    = ($(window).width() - (megamenu.offset().left + megamenu.outerWidth()));
	            if(end_right2 > end_right) {
	            }
	        }
	        $(this).hover(function () {
	            $("ul.engo-megamenu > li").removeClass("active");
	            $(this).addClass("active");

		        },function () {
		            $(this).removeClass("active");
		        });
			});
		});
	jQuery( document ).ready( function() {
		/** Intro product carousel static screen - full height **/
		var $window_h = jQuery(window).height();
		jQuery(window).load(function() {
			/** toggle menu header v7 **/
			var toggle_background = jQuery(".engo-toggle-menu-position").attr("data-style");
			var nav_mega = jQuery(".engo-horizontal-fixed-screen nav.navbar-mega").children(".navbar-collapse");
			var btn_toggle_mega = jQuery(".engo-toggle-menu-position");
			jQuery("body").append("<div class='engo-menu-toggle-background'></div>");
			jQuery(".engo-horizontal-fixed-screen").addClass(toggle_background);
			nav_mega.css({"top":($window_h - nav_mega.outerHeight())/2,"left":"0"});

			var header_fix_h = jQuery("#engo-masthead").outerHeight(true);
			var footer_fix_h = jQuery("#engo-footer").outerHeight(true);
			var wpadminbar = jQuery("#wpadminbar").outerHeight();
			var height_fix = $window_h - header_fix_h - footer_fix_h - wpadminbar;
			jQuery(".engo-static-screen-height").css({"height":height_fix});
			// jQuery(".owl-carousel",".engo-static-screen-height").css({"overflow-x":"hidden"});
			jQuery(".widget_product_intro .image img").css({"height":height_fix,"width":"auto"});
			jQuery(window).on('resize', function(){
				$window_h = jQuery(window).height();
				var header_fix_h_resize = jQuery("#engo-masthead").outerHeight(true);
				var footer_fix_h_resize = jQuery("#engo-footer").outerHeight(true);
				var wpadminbar_resize = jQuery("#wpadminbar").outerHeight();
				var height_fix_resize = $window_h - header_fix_h_resize - footer_fix_h_resize - wpadminbar_resize;
				jQuery(".engo-static-screen-height").css({"height":$window_h - header_fix_h_resize - footer_fix_h_resize});
				jQuery(".owl-carousel",".engo-static-screen-height").css({"overflow-x":"hidden"});
				jQuery(".widget_product_intro .image img").css({"height":height_fix_resize,"width":"auto"});
				nav_mega.css({"top":($window_h - nav_mega.outerHeight())/2,"left":"0"});
			});
			btn_toggle_mega.click(function () {
				jQuery(this).toggleClass("on");
				jQuery(".navbar-collapse").toggleClass("open");
				if(btn_toggle_mega.attr("data-merge")) {
					var merge_element = jQuery("."+btn_toggle_mega.attr("data-merge"));
					if(merge_element.length > 0) {
						var toggle_top = jQuery(merge_element).offset().top;
						var toggle_right = jQuery(window).width() - jQuery(merge_element).offset().left - jQuery(merge_element).outerWidth(true);
						var toggle_bottom = $window_h - jQuery(merge_element).offset().top - jQuery(merge_element).outerHeight(true);
						var toggle_left = jQuery(merge_element).offset().left;

						jQuery(".engo-menu-toggle-background").css({"position":"absolute","top":toggle_top,"right":toggle_right,"bottom":toggle_bottom,"left":toggle_left});
					}
				}
				jQuery(".engo-menu-toggle-background").toggleClass("show "+ toggle_background);
			});
		});
	});
								