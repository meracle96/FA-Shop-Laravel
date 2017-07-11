(function($){
"use strict"; 
// Start of use strict
jQuery(document).ready(function($){
	//Mega Menu
	$('.mega-menu-list-product .wrap-item').owlCarousel({
		items: 5,
		itemsCustom: [ 
		[0, 2], 
		[480, 3], 
		[768, 4], 
		[992, 5], 
		[1200, 5] 
		],
		pagination: false,
		navigation: false,
	});
	$('.mega-menu-list-product .prev').on('click', function(e){
		e.preventDefault();
		$(this).parent().prev().trigger('owl.prev');
	});
	$('.mega-menu-list-product .next').on('click', function(e){
		e.preventDefault();
		$(this).parent().prev().trigger('owl.next');
	});
	$('.mega-menu-slider-brand .wrap-item').owlCarousel({
		items: 1,
		itemsCustom: [ 
		[0, 1], 
		[480, 1], 
		[768, 1], 
		[992, 1], 
		[1200, 1] 
		],
		pagination: false,
		navigation: false,
	});
	$('.mega-menu-slider-brand .prev').on('click', function(e){
		e.preventDefault();
		$(this).parent().prev().trigger('owl.prev');
	});
	$('.mega-menu-slider-brand .next').on('click', function(e){
		e.preventDefault();
		$(this).parent().prev().trigger('owl.next');
	});
	//Toggle Box Cat
	$('.box-cat-toggle').click(function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).next().slideToggle();
	});
	$("body").click(function() {
		$('.wrap-scrollbar').slideUp();
	});
	//Product Slider
	$('.content-product-slider .wrap-item').owlCarousel({
		items: 1,
		itemsCustom: [ 
		[0, 1], 
		[480, 1], 
		[768, 1], 
		[992, 1], 
		[1200, 1] 
		],
		pagination: false,
		navigation: false,
	});
	$('.prev-new-arrival').on('click', function(e){
		e.preventDefault();
		$('.wrap-item').trigger('owl.prev');
	});
	$('.next-new-arrival').on('click', function(e){
		e.preventDefault();
		$('.wrap-item').trigger('owl.next');
	});
	
	//Grid Text Box
	var height=$('.banner-grid-left').find('.grid-image-box').height()
	$('.grid-text-box').height(height);
	$('.grid-text-box').hover(function(){
	$('.grid-text-box.active').removeClass('active');},function(){
		$('.grid-text-box').last().addClass('active');
	});
});
})(jQuery); 
// End of use strict