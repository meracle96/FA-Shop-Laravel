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
//-------------------button-menu--------------------  
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
function init(){ 	
var number = 5; 
jQuery(".jCarouselLite").jCarouselLite({
btnNext: ".more-views .next",
btnPrev: ".more-views .prev",
visible: number,
start: 0,
circular: true,
speed: 300,
vertical: true,
});                 
}
init();
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
afterAction: function (e) {
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
});
})(jQuery); // End of use strict