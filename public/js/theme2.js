(function($){
"use strict"; // Start of use strict
jQuery(document).ready(function($){   
	$("body").click(function() {
	$('.wrap-scrollbar').hide();
	});
	$(".advanced-search").click(function(e) {
	e.stopPropagation();
	});		
	$('.scrollbar li').click(function(){
	var x = $('input',$(this)).attr('value');		
	$('.cat-value').val(x);
	$('.cat-search').text($(this).text());
	});
	$('.wrap-scrollbar').hide();		
	$('.wrap-scrollbar li,.cat-search').click(function(e){
	$('.wrap-scrollbar').slideToggle('fast');
	});
	$('.advanced-search').hide();
	$('.box-search-icon').click(function(){
		$('.advanced-search').slideToggle();
	})
	$("body").click(function(){
		$('.advanced-search').hide();
	});

	$(".box-search").click(function(e) {
		e.stopPropagation();
	});	
//-------------------button-menu-------------------- 
	if($(window).width() >= 768){
		$('.explodedmenu > li').hover(function(){
			 $('.explodedmenu > li').each(function(){              
				if($(this).hasClass('actived-default')){
					$(this).removeClass('actived-default');
				}
			 });
		},function(){
			$('.explodedmenu > li.parentMenu').each(function(index){                 
				if(index==0){
					$(this).addClass('actived-default');
				};                
			 });
		}); 
	}
	if($(window).width() >= 768){
		$('.btn-01').click(function(){
			$('.box-x > ul').toggleClass('show-box');
			$('.header').removeClass('bg-header');
			$('.header').css('height','0');
			$('.box-x > ul >li').each(function(){
				$('.box-x > ul >li').find('.hide-box').removeClass('show-box');
				$(this).removeClass('actived');
			});
			$(this).toggleClass('btn-close');
		});
		$('.box-x > ul >li').click(function(){	
			$('.box-x > ul >li').each(function(){
				$('.box-x > ul >li').find('.hide-box').removeClass('show-box');
				$('.box-x > ul >li').removeClass('actived');				
			});
			$('.header').addClass('bg-header');
			if($(this).attr('class') == 'btn-02' || $(this).attr('class')=='btn-02 actived'){						
				$(this).addClass('actived');
				$('.box_header_03').addClass('show-box');
				$('.bg-header').css('height','480px');
			}else if($(this).attr('class') == 'btn-03' || $(this).attr('class')=='btn-03 actived'){							
				$(this).addClass('actived');
				$('.box_account').addClass('show-box');
				$('.bg-header').css('height','396px');
			}else if($(this).attr('class') == 'btn-04' || $(this).attr('class')=='btn-04 actived'){						
				$(this).addClass('actived');
				$('.advanced-search').addClass('show-box');
				$('.bg-header').css('height','236px');
			}else if($(this).attr('class') == 'btn-05' || $(this).attr('class')=='btn-05 actived'){			
				$(this).addClass('actived');
				$('.wrap-lang-cur').addClass('show-box');
				$('.bg-header').css('height','310px');
			}else if($(this).attr('class') == 'btn-06' || $(this).attr('class')=='btn-06 actived'){							
				$(this).addClass('actived');
				$('.block-wrap-cart').addClass('show-box');
				$('.bg-header').css('height','580px');
			}
		});
	}
	else{
		$('.btn-05 .wrap-lang-cur').hide();
			$('.btn-05').click(function(){
				$('.btn-05 .wrap-lang-cur').slideToggle();
			});
		$('.btn-06 .block-wrap-cart').hide();
			$('.btn-06').click(function(){
				$('.btn-06 .block-wrap-cart').slideToggle();
			});
		$('.btn-04 .advanced-search').hide();
			$('.btn-04').click(function(){
				$('.btn-04 .advanced-search').slideToggle();
			});
		$('.btn-03 .box_account').hide();
			$('.btn-03').click(function(){
				$('.btn-03 .box_account').slideToggle();
			});
	}
	//--------------------------------------slider-categories------------------------------
	$('.block-categories .wrap_item').owlCarousel({
		items: 4,
		itemsCustom:[ 
		[0, 2], 
		[480, 3], 
		[768, 5], 
		[992, 5], 
		[1200, 6] 
		],
		pagination: false,
		slideSpeed : 800,
		addClassActive: true,
		scrollPerPage: false,
		touchDrag: false,
		afterAction: function (e) {
			if(this.$owlItems.length > this.options.items){
				$('.block-categories .navslider').show();
			}else{
				$('.block-categories .navslider').hide();
			}
		}            
	});
	$('.block-categories .navslider .prev').on('click', function(e){
		e.preventDefault();
		$('.block-categories .wrap_item').trigger('owl.prev');
	});
	$('.block-categories .navslider .next').on('click', function(e){
		e.preventDefault();
		$('.block-categories .wrap_item').trigger('owl.next');
	});
//-------------------------------------------slider-newarrial---------------------
	$('.block-newarrial .wrap_item').owlCarousel({
		items: 4,
		itemsCustom:[ 
		[0, 1], 
		[480, 2], 
		[768, 3], 
		[992, 4], 
		[1200, 4] 
		],
		pagination: false,
		slideSpeed : 800,
		addClassActive: true,
		scrollPerPage: false,
		touchDrag: false,
		afterAction: function (e) {
			if(this.$owlItems.length > this.options.items){
				$('.block-newarrial .navslider').show();
			}else{
				$('.block-newarrial .navslider').hide();
			}
		}            
	});
	$('.block-newarrial .navslider .prev').on('click', function(e){
		e.preventDefault();
		$('.block-newarrial .wrap_item').trigger('owl.prev');
	});
	$('.block-newarrial .navslider .next').on('click', function(e){
		e.preventDefault();
		$('.block-newarrial .wrap_item').trigger('owl.next');
	});
//-------------------------------------------slider-trend-now---------------------
	$('#block-trend-now .wrap_item').owlCarousel({
		items: 4,
		itemsCustom: [ 
			[0, 1], 
			[480, 2], 
			[768, 3], 
			[992, 2], 
			[1200, 3] 
		],
		pagination: false,
		slideSpeed : 800,
		addClassActive: true,
		scrollPerPage: false,
		touchDrag: false,
		afterAction: function (e) {
			if(this.$owlItems.length > this.options.items){
				$('#block-trend-now .navslider').show();
			}else{
				$('#block-trend-now .navslider').hide();
			}
		}            
	});
	$('#block-trend-now .navslider .prev').on('click', function(e){
		e.preventDefault();
		$('#block-trend-now .wrap_item').trigger('owl.prev');
	});
	$('#block-trend-now .navslider .next').on('click', function(e){
		e.preventDefault();
		$('#block-trend-now .wrap_item').trigger('owl.next');
	});
//-------------------------------------------slider-extra---------------------
	$('.box-extra-slider .product-grid').owlCarousel({
		items: 1,
		itemsCustom:[ 
		[0, 1], 
		[480, 1], 
		[768, 1], 
		[992, 1], 
		[1200, 1] 
		],
		pagination: false,
		slideSpeed : 800,
		addClassActive: true,
		scrollPerPage: false,
		touchDrag: false,
		afterAction: function (e) {
			if(this.$owlItems.length > this.options.items){
				$('.box-extra-slider .navslider').show();
			}else{
				$('.box-extra-slider .navslider').hide();
			}
		}            
	});
	$('.box-extra-slider .navslider .prev').on('click', function(e){
		e.preventDefault();
		$('.box-extra-slider .product-grid').trigger('owl.prev');
	});
	$('.box-extra-slider .navslider .next').on('click', function(e){
		e.preventDefault();
		$('.box-extra-slider .product-grid').trigger('owl.next');
	});
//-----------------------countdown--------------------------
	$(".dateCountdown01").TimeCircles({
		fg_width: 0.05,
		bg_width: 0,
		text_size: 0,
		circle_bg_color: "#ffd2d1",/*ff6766*/
		time: {
			Days: {
				show: true,
				text: "Days",
				color: "#ff6766"
			},
			Hours: {
				show: true,
				text: "Hours",
				color: "#ff6766"
			},
			Minutes: {
				show: true,
				text: "Minutes",
				color: "#ff6766"
			},
			Seconds: {
				show: true,
				text: "Seconds",
				color: "#ff6766"
			}
		}
	}); 
	$(".dateCountdown02").TimeCircles({
		fg_width: 0.05,
		bg_width: 0,
		text_size: 0,
		circle_bg_color: "#ffd2d1",/*ff6766*/
		time: {
			Days: {
				show: true,
				text: "Days",
				color: "#ff6766"
			},
			Hours: {
				show: true,
				text: "Hrs",
				color: "#ff6766"
			},
			Minutes: {
				show: true,
				text: "Min",
				color: "#ff6766"
			},
			Seconds: {
				show: true,
				text: "Sec",
				color: "#ff6766"
			}
		}
	}); 
//-------------------------slider-shop-the-look----------------------
	$('.block-shop-the-look .wrap_item').owlCarousel({
		items: 3,
		itemsCustom: [ 
		[0, 1], 
		[480, 2], 
		[768, 3], 
		[992, 3], 
		[1200, 3] 
		],
		pagination: false,
		slideSpeed : 800,
		addClassActive: true,
		scrollPerPage: false,
		touchDrag: false,
		afterAction: function (e) {
			if(this.$owlItems.length > this.options.items){
			$('.block-shop-the-look .navslider').show();
			}else{
			$('.block-shop-the-look .navslider').hide();
			}
		}            
		});
		$('.block-shop-the-look .navslider .prev').on('click', function(e){
			e.preventDefault();
			$('.block-shop-the-look .wrap_item').trigger('owl.prev');
		});
		$('.block-shop-the-look .navslider .next').on('click', function(e){
			e.preventDefault();
			$('.block-shop-the-look .wrap_item').trigger('owl.next');
	});
//--------------------------------------slider-blog--------------------------
	$('.lastest-blog .wrap_item').owlCarousel({
		items: 3,
		itemsCustom: [ 
		[0, 1], 
		[480, 1], 
		[768, 2], 
		[992, 2], 
		[1200, 2] 
		],
		pagination: false,
		slideSpeed : 800,
		addClassActive: true,
		scrollPerPage: false,
		touchDrag: false,
		afterAction: function (e) {
			if(this.$owlItems.length > this.options.items){
				$('.lastest-blog .navslider').show();
			}else{
				$('.lastest-blog .navslider').hide();
			}
		}            
	});
	$('.lastest-blog .navslider .prev').on('click', function(e){
		e.preventDefault();
		$('.lastest-blog .wrap_item').trigger('owl.prev');
	});
		$('.lastest-blog .navslider .next').on('click', function(e){
		e.preventDefault();
	$('.lastest-blog .wrap_item').trigger('owl.next');
	});
//--------------------------------------slider-banner--------------------------
	$('.box-banner-slider .wrap_item').owlCarousel({
		items: 1,
		itemsCustom: [ 
		[0, 1], 
		[480, 1], 
		[768, 1], 
		[992, 1], 
		[1200, 1] 
		],
		pagination: false,
		slideSpeed : 800,
		addClassActive: true,
		scrollPerPage: false,
		touchDrag: false,
		afterAction: function (e) {
			if(this.$owlItems.length > this.options.items){
				$('.box-banner-slider .navslider').show();
			}else{
				$('.box-banner-slider .navslider').hide();
			}
		}            
	});
	$('.box-banner-slider .navslider .prev').on('click', function(e){
		e.preventDefault();
		$('.box-banner-slider .wrap_item').trigger('owl.prev');
	});
	$('.box-banner-slider .navslider .next').on('click', function(e){
		e.preventDefault();
		$('.box-banner-slider .wrap_item').trigger('owl.next');
	});
	$('.list-cate .link1').click(function(){
	$('.list-cate .link1').each(function(){
		$(this).removeClass('actived');
	});
	$(this).addClass('actived');
	var index = $(this).data("index");
	var carousel = $('.box-banner-slider .wrap_item').owlCarousel();					
		carousel.trigger('owl.goTo', index);				
	});
//---------------------------------grid------------------------------
	$('.open-item').click(function(){
		if($(this).hasClass('closetag')){
			$('.block-tag').animate({
				'height':'108px'  
			}, 500, function(){});
			$(this).addClass('opentag');
			$(this).removeClass('closetag');
		}else{
		$('.block-tag').animate({
			'height':'54px'  
		}, 500, function(){});
			$(this).addClass('closetag');
			$(this).removeClass('opentag');
		}
	})	
	$(".selected-limiter").html($('.select-limiter li a.selected').html());
	$(".selected-order").html($('.select-order li a.selected').html()); 
	$('.selected-limiter').click(function(){
		$('.select-limiter').toggleClass('current-item');
	});
	$('.selected-order').click(function(){
		$('.select-order').toggleClass('current-item');
	});
	$('.selected-limiter1').click(function(){
		$('.select-limiter1').toggleClass('current-item');
	});
	$('.selected-order1').click(function(){
		$('.select-order1').toggleClass('current-item');
	});
	$(".selected-limiter1").html($('.select-limiter1 li a.selected1').html());
	$(".selected-order1").html($('.select-order1 li a.selected1').html());
	$('#upsell_pro .wrap_item').owlCarousel({
		items: 4,
		itemsCustom: [ 
		[0,1], 
		[480,2], 
		[768,3], 
		[992,4], 
		[1200,4] 
		],
		pagination: false,
		slideSpeed : 800,
		addClassActive: true,  
		afterAction: function (e){
			if(this.$owlItems.length && this.options.items){
				$('#upsell_pro .navslider').show();
			}else{
				$('#upsell_pro .navslider').hide();
		}
		}            
	});
	$('#upsell_pro .navslider .prev').on('click', function(e){
		e.preventDefault();
		$('#upsell_pro .wrap_item').trigger('owl.prev');
	});
	$('#upsell_pro .navslider .next').on('click', function(e){
		e.preventDefault();
		$('#upsell_pro .wrap_item').trigger('owl.next');
	});
	//--------------------------------------goto top--------------------------
	$("#vt-totop").hide();
	$(function () {
		var wh = $(window).height();
		var whtml =  $(document).height();
		$(window).scroll(function () {
			if ($(this).scrollTop() > whtml/10) {
				$('#vt-totop').fadeIn();
			} else {
				$('#vt-totop').fadeOut();
			}
			});
			$('#vt-totop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
		return false;
		});
	}); 
	$('body').append('<div class="block-slidebar"></div>');
		$('.block-slidebar').html($('.mobile-sidebar').html());
		$('.mobile-sidebar').remove();            
		$('.btn-sidebar').click(function(){
			if($('body').hasClass('show-menu')){
				$('body').removeClass('show-menu');
			}else{
				$('body').addClass('show-menu');
			}
		});
		$('.close-menu').click(function(){
			if($('body').hasClass('show-menu')){
				$('body').removeClass('show-menu');
			}else{
				$('body').addClass('show-menu');
			}
		});	
	});
	})(jQuery); // End of use strict