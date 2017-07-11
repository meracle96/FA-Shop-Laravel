(function($){
"use strict"; // Start of use strict
//Document Ready
$(document).ready(function(){
	//Cat Drop Down
	$('body').click(function(){
		$('.content-cat-dropdown').slideUp(500);
	});
	$('.title-cat-dropdown').click(function(event){
		event.stopPropagation();
		$(this).next().slideToggle(500);
	});
	$('body').click(function(){
		$('.list-cat-scrollbar').slideUp(500);
	});
	$('.box-cat-toggle').click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$(this).next().slideToggle(500);
	});
	//Shop The Look
	$('.inner-item-shop-post').each( function() {
		$(this).hoverdir(); 
	});
});
//Window Load
$(window).load(function(){ 
	//Banner Advert
	$('.banner-advert .wrap-item').owlCarousel({
		items: 1,
		itemsCustom: [ 
		[0,1], 
		[480,1], 
		[768,1], 
		[992,1], 
		[1200,1] 
		],
		pagination : true,
		navigation : false,
	});
	//News Scroll
	$('.item-left').last().find('.item-news').addClass('item-last-child');
	$('.item-right').last().find('.item-news').addClass('item-last-child');
	$(".content-news-scroll").mCustomScrollbar({
		scrollButtons:{
			enable:true
		}
	});
	//Banner Slider
	$('.banner-slider .wrap-item').owlCarousel({
		items: 1,
		itemsCustom: [ 
		[0,1], 
		[480,1], 
		[768,1], 
		[992,1], 
		[1200,1] 
		],
		navigation : false,
	});
	//Sidebar brand Slider
	$(".four-item .vertical-slider").jCarouselLite({
		vertical: true,
		visible:4,
		btnNext: ".four-item .jcaroul-control-nav .next",
		btnPrev: ".four-item .jcaroul-control-nav .prev",
	});
	$(".five-item .vertical-slider").jCarouselLite({
		vertical: true,
		visible:5,
		btnNext: ".five-item .jcaroul-control-nav .next",
		btnPrev: ".five-item .jcaroul-control-nav .prev",
	});
	//New Arrival Slider
	$('.new-arrival-slider .wrap-item').owlCarousel({
		items: 1,
		itemsCustom: [ 
		[0,1], 
		[480,1], 
		[768,1], 
		[992,1], 
		[1200,1] 
		],
		navigation : false,
	});
	//Product Slider
	$('.single-slider .wrap-item').owlCarousel({
		items: 1,
		itemsCustom: [ 
		[0,1], 
		[480,1], 
		[768,1], 
		[992,1], 
		[1200,1] 
		],
		pagination : false,
		navigation : true,
	});
	//Content Tab Product Category
	$('.content-tab-product-category .wrap-item').owlCarousel({
		items: 3,
		itemsCustom: [ 
		[0,1], 
		[480,1], 
		[768,2], 
		[992,3], 
		[1200,3] 
		],
		pagination : false,
		navigation : true,
	});
	//Content Tab Product Category
	$('.content-tab-product .wrap-item').owlCarousel({
		items: 3,
		itemsCustom: [ 
		[0,1], 
		[480,2], 
		[768,3], 
		[992,4], 
		[1200,5] 
		],
		pagination : false,
		navigation : true,
	});
	//Brand Slider
	$('.list-brand .wrap-item').owlCarousel({
		items: 6,
		itemsCustom: [ 
		[0,2], 
		[480,3], 
		[768,4], 
		[992,5], 
		[1200,6] 
		],
		pagination : false,
		navigation : true,
	});
});
})(jQuery); // End of use strict