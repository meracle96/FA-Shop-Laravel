(function($){
	
	$.fn.viewport = function(){	
	    var e = window, a = 'inner';
	    if (!('innerWidth' in window )) {
	        a = 'client';
	        e = document.documentElement || document.body;
	    }
	    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
	}	
	
	$.fn.getScrollbarWidth=	function(){
		document.body.style.overflow = 'hidden'; 
		var width = document.body.clientWidth;
		document.body.style.overflow = 'scroll'; 
		width -= document.body.clientWidth; 
		if(!width) width = document.body.offsetWidth - document.body.clientWidth;
		document.body.style.overflow = ''; 	
		return width;
	}
	
	$.fn.detectDevice = function(){
		var width = $.fn.viewport().width;
		var scrollWidth = $().getScrollbarWidth();
		
 		if( width > 1200 ){
			return 'wide';
  		}else if( width >= 992 ){
			return 'normal';
  		}else if(  width >= 768 ){
			return 'tablet';
  		}else if(  width > 0 ){
			return 'mobile';
  		}
	}

	$.fn.updateDataElementClass = function(){
		var $this = $(this);
		
		currentdevice = (currentdevice)?currentdevice:$.fn.detectDevice();
		
		// Build data
		if ($this.data('default')) return; 		
		// With attr data-*
		else $this.data();
		// Make the source better view in inspector
    	$this.removeAttr ('data-default data-wide data-normal data-tablet data-stablet data-mobile');
		// For element no attr data-default
		if (!$this.data('default')) 
			$this.data('default', $this.attr('class'));
		// Default
		if ( !$this.data('default') ||  !currentdevice || !$this.data(currentdevice))
			return;	

		// Add new
		else{
				// Remove current
				$this.removeClass ($this.data('default'));			
				$this.addClass ($this.data(currentdevice));
		}
	}
	
})(jQuery)
var currentdevice = '';
jQuery(document).ready(function($){
	
	var bootstrap_elements = $('[class*="span"]');
	// Build data
	bootstrap_elements.each ( function(){
		var $this = $(this);
		// With attr data-*
		$this.data();
		// Make the source better view in inspector
    	 $this.removeAttr ('data-default data-wide data-normal data-tablet data-stablet data-mobile');
		// For element no attr data-default
		if (!$this.data('default')) 
			$this.data('default', $this.attr('class'));
	
	});
	function updateBootstrapElementClass(newdevice){
  		if (newdevice == currentdevice) return ;
		bootstrap_elements.each(function(){
			var $this = $(this);
			// Default
			if ( !$this.data('default') || (!$this.data(newdevice) && (!currentdevice || !$this.data(currentdevice))) )
				return;
			// Remove current
			if ($this.data(currentdevice)) $this.removeClass($this.data(currentdevice));
			else $this.removeClass ($this.data('default'));
			// Add new
			if ($this.data(newdevice)) $this.addClass ($this.data(newdevice));
			else $this.addClass ($this.data('default'));
		});
    	currentdevice = newdevice;
	};
	function getScrollbarWidth(){
		document.body.style.overflow = 'hidden'; 
		var width = document.body.clientWidth;
		document.body.style.overflow = 'scroll'; 
		width -= document.body.clientWidth; 
		if(!width) width = document.body.offsetWidth - document.body.clientWidth;
		document.body.style.overflow = ''; 	
		return width;
	}
	function viewport() {
	    var e = window, a = 'inner';
	    if (!('innerWidth' in window )) {
	        a = 'client';
	        e = document.documentElement || document.body;
	    }
	    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
	}
	
	function idforPriceOnMenu(){
		if($('.sm_megamenu_content .price-box .special-price span.special-price').length > 0){
			$('.sm_megamenu_content .price-box .special-price span.special-price').each(function(){
				$(this).attr('id', $(this).attr('id')+'_onmenu');
			});
		}
		if($('.sm_megamenu_content .price-box .regular-price').length > 0){
			$('.sm_megamenu_content .price-box .regular-price').each(function(){
				$(this).attr('id', $(this).attr('id')+'_onmenu');
			});
		}
	}
	idforPriceOnMenu();	
	
	function detectDevice () {
		var width = viewport().width; 
 		if( width > 1200 ){
			return 'wide';
  		}else if( width >= 992 ){
			return 'normal';
  		}else if(  width >= 768 ){
			return 'tablet';
  		}else if(  width > 0 ){
			return 'mobile';
  		}
	}

  	updateBootstrapElementClass (detectDevice());
  
  	// With window resize
  	$(window).resize(function(){
    	if ($.data(window, 'detect-device-time'))
      		clearTimeout($.data(window, 'detect-device-time'));
    	$.data(window, 'detect-device-time',
      		setTimeout(function(){
        		updateBootstrapElementClass (detectDevice());
      		}, 200)
    	)
  	});

});


jQuery(window).load(function(){	
  	function viewport() {
	    var e = window, a = 'inner';
	    if (!('innerWidth' in window )) {
	        a = 'client';
	        e = document.documentElement || document.body;
	    }
	    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
	}
});

/*---------------------------------------*/
	
jQuery.cookie = function(name, value, options) {
	if (typeof value != 'undefined') { // name and value given, set cookie
		options = options || {};
		if (value === null) {
			value = '';
			options.expires = -1;
		}
		var expires = '';
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
			if (typeof options.expires == 'number') {
				date = new Date();
				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
			} else {
				date = options.expires;
			}
			expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
		}
		// CAUTION: Needed to parenthesize options.path and options.domain
		// in the following expressions, otherwise they evaluate to undefined
		// in the packed version for some reason...
		var path = options.path ? '; path=' + (options.path) : '';
		var domain = options.domain ? '; domain=' + (options.domain) : '';
		var secure = options.secure ? '; secure' : '';
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	} else { // only name given, get cookie
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;

	}
};


/**
 * vt tabs plugin
 */
(function($) { 
	$.fn.innerTab = function (_options){
		return this.each( function() {		
			var container = $( this );
			new $.innerTab().setup( this, container );
		} );
	}
	 $.innerTab = function() { 
		var self = this;					
		this.lastTab = null;
		this.nextTab=null;
		this.setup=function( obj, o ){
			var contentTabs = o.children( 'div.inner-tab' );
			var nav = o.children( 'ul' );
			contentTabs.children('div').hide();
			nav.children('li:first').addClass('first').addClass( 'actived' );	
			contentTabs.children('div:first').show();
			
			nav.children('li').children('a').click( function() {
				self.lastTab = 	nav.children('li.actived').children('a').attr('href');										
				nav.children('li.actived').removeClass('actived')											
				$(this).parent().addClass('actived');
				var currentTab = $(this).attr('href'); 
				self.tabActive( contentTabs, currentTab );		
				return false;
			});	
		};
		this.tabActive=function( contentTabs,  currentTab ){
			if(  this.lastTab != currentTab ){
				contentTabs.children( this.lastTab ).hide();	
			}

			contentTabs.children( currentTab ).show();
		};
	};
})(jQuery);

function switchFontSize (ckname,val){
	var bd = document.getElementsByTagName('body');
	if (!bd || !bd.length) return;
	bd = bd[0];
	var oldclass = 'fs'+CurrentFontSize;
	switch (val) {
		case 'inc':
			if (CurrentFontSize+1 < 7) {
				CurrentFontSize++;
			}		
		break;
		case 'dec':
			if (CurrentFontSize-1 > 0) {
				CurrentFontSize--;
			}		
		break;
		case 'reset':
		default:
			CurrentFontSize = DefaultFontSize;			
	}
	var newclass = 'fs'+CurrentFontSize;
	bd.className = bd.className.replace(new RegExp('fs.?', 'g'), '');
	bd.className = trim(bd.className);
	bd.className += (bd.className?' ':'') + newclass;
	createCookie(ckname, CurrentFontSize, 365);
}
function trim(str, chars) {
	chars = chars || "\\s";
	str =   str.replace(new RegExp("^[" + chars + "]+", "g"), "");
	str =  str.replace(new RegExp("^[" + chars + "]+", "g"), "");
	return str;
}
function switchTool (ckname, val) {
	createCookie(ckname, val, 365);
	window.location.reload();
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
	//console.log(name+"="+value+expires);
}
function getCookie(c_name, defaultvalue){	//alert(document.cookie);
	var i,x,y,arrcookies=document.cookie.split(";");
	for (i=0;i<arrcookies.length;i++){
	  x=arrcookies[i].substr(0,arrcookies[i].indexOf("="));
	  y=arrcookies[i].substr(arrcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name){
		  return unescape(y);
	  }
	}
	return defaultvalue;
}

String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ""); };

function menuFistLastItem () {
	if ((menu = $('nav')) && (children = menu.childElements()) && (children.length)) {
		children[0].addClassName ('first');
		children[children.length-1].addClassName ('last');
	}
}

//Add hover event for li - hack for IE6
function navMouseHover () {
	var lis = $$('#nav li');
	if (lis && lis.length) {
		lis.each (function(li){
			li.onMouseover = toggleMenu (li, 1);
			li.onMouseout = toggleMenu (li, 0);
		});
	}
}

toggleMenu = function (el, over) {
	  var iS = false;
    if (Element.childElements(el) && Element.childElements(el).length > 1) {
	    var uL = Element.childElements(el)[1];
			iS = true;
		}
    if (over) {
        Element.addClassName(el, 'over');
				Element.addClassName (el.down('a'), 'over');
        if(iS){ uL.addClassName('shown-sub')};
    }
    else {
        Element.removeClassName(el, 'over');
				Element.removeClassName (el.down('a'), 'over');
        if(iS){ uL.removeClassName('shown-sub')};
    }
}

function displayChildMenu(id){
	jQuery("#"+'child_menu'+id).css("display", "block");

	if ( jQuery("#"+'parent_menu'+id).attr("class").indexOf("active") < 0 ) 
		jQuery("#"+'parent_menu'+id).addClass("over");
}

function hideAllMenu(){
	menu = jQuery("[id*=child_menu]");
	
	jQuery.each(menu, function(){
		jQuery("#"+this.id).css("display", "none");
		jQuery("#parent_menu" + this.id.replace("child_menu", "") ).removeClass("over");
	});
}

function rollbackCurrentMenu(){
	hideAllMenu();
	jQuery("[rel=active_menu]").css("display", "block");
}
/*-----------------------------------------------------------*/
// JavaScript Document

jQuery(document).ready(function($){
	 
	$('#btn_toggle').click(function(){
		console.log('test');
		if($(this).hasClass('open')){
			$(this).addClass('btnclose');
			$(this).removeClass('open');
			
			$('#settings-box').animate({
				'left':'-275px'  
			}, 500, function(){});
		}else{
			$(this).addClass('open');
			$(this).removeClass('btnclose');

			$('#settings-box').animate({
				'left':'0px'  
			}, 500, function(){});
		}
		
	});
	$('.store-switcher ul').hide();
	$('.store-switcher > span').click(function(){
		$('.store-switcher ul').slideToggle();
	})
	
});
jQuery(document).ready(function($){
	$('.cpitem_layoutfb,.cpitem_menutype').change(function(){
		cpApply();
	});

	/*$('.btn-cpdefault').change(function(){
		cpDefault();
	});*/
});
function cpDefault(_cookie){
	for (i=0;i<_cookie.length;i++) { 
		if(getCookie(TMPL_NAME+'_'+_cookie[i])!=undefined){
			createCookie (TMPL_NAME+'_'+_cookie[i], '', -1);
		}
	}

	if (window.location.href.indexOf ('?')>-1) window.location.href = window.location.href.substr(0,window.location.href.indexOf ('?'));
	else window.location.reload();
}

function cpApply () {
	var elems = document.getElementById('settings-box').getElementsByTagName ('*');
	var usersetting = {};
	for (i=0;i<elems.length;i++) {
		var el = elems[i]; 
	    if (el.name && (match=el.name.match(/^cpitem_(.*)$/))) {
	        var name = match[1];	        
	        var value = '';
	        if (el.tagName.toLowerCase() == 'input' && (el.type.toLowerCase()=='radio' || el.type.toLowerCase()=='checkbox')) {
	        	if (el.checked) value = el.value;
	        } else {
	        	value = el.value;
	        }
			if(trim(value)){
				if (usersetting[name]) {
					if (value) usersetting[name] = value + ',' + usersetting[name];
				} else {
					usersetting[name] = value;
				}
			}
	    }
	}
	
	for (var k in usersetting) {
		name = TMPL_NAME + '_' + k; //alert(name);
		value = usersetting[k];
		createCookie(name, value, 365);
	}
	
	if (window.location.href.indexOf ('?')>-1) window.location.href = window.location.href.substr(0,window.location.href.indexOf ('?'));
	else window.location.reload();
}

(function($){
	$.fn.VtAccordion = function(options) {
		var $el    = $(this);
		var defaults = {
			active: 'open',
			el_wrap: 'li',
			el_content: 'ul',
			accordion: true,
			expand: true,
			btn_open: '<i class="fa fa-plus-square-o"></i>',
			btn_close: '<i class="fa fa-minus-square-o"></i>'
		};
		var options = $.extend({}, defaults, options);
		
		
		$(document).ready(function() {
			$el.find(options.el_wrap).each(function(){
				$(this).find('> a, > span, > h4').wrap('<div class="header_item"></div>');
				if(($(this).find(options.el_content)).length){
					$(this).find('> .header_item').append('<span class="btn_toggle">' + options.btn_open + '</span>');
					$(this).find('> '+options.el_content+':not(".header_item")').wrap('<div class="item_content"></div>');
				}
			});
			
			if(options.accordion){
				$('.item_content').hide();
				$el.find(options.el_wrap).each(function(){
					if($(this).hasClass(options.active)) {
						$(this).find('> .item_content')
							   .addClass(options.active)
							   .slideDown();
						$(this).find('> .header_item')
							   .addClass(options.active);
					}
				});
			} else {
				$el.find(options.el_wrap).each(function(){
					if(!options.expand){
						$('.item_content').hide();
					} else {
						$(this).find('> .item_content').addClass(options.active);
						$(this).find('> .header_item').addClass(options.active);
						$(this).find('> .header_item .btn_toggle').html(options.btn_close);
					}
				});
			}
			/*$el.find('.parent').each(function(){
				$(this).find('> .header_item').addClass('open');
				$(this).find('> .item_content').show();
				$(this).find('> .item_content').addClass('open');
				return false;
			});*/
	   });
	    $(window).load(function() {
			$el.find(options.el_wrap).each(function(){
				var $wrap = $(this);
				var $accrhead = $wrap.find('> .header_item');
				var btn_toggle = '.btn_toggle';
				
				$accrhead.find(btn_toggle).on('click', function(event) {
					event.preventDefault();
					var obj = $(this);
					var slide = true;
					if($accrhead.hasClass(options.active)) {
						slide = false;
					}
					if(options.accordion){
						$wrap.siblings(options.el_wrap).find('> .item_content').slideUp().removeClass(options.active);
						$wrap.siblings(options.el_wrap).find('> .header_item').removeClass(options.active);
						$wrap.siblings(options.el_wrap).find('> .header_item ' + btn_toggle).html(options.btn_open);
					}
					if(slide) {
						$accrhead.addClass(options.active);
						obj.html(options.btn_close);
						$accrhead.siblings('.item_content').addClass(options.active).stop(true, true).slideDown();
					} else {
						$accrhead.removeClass(options.active);
						obj.html(options.btn_open);
						$accrhead.siblings('.item_content').removeClass(options.active).stop(true, true).slideUp();
					}
					return false;
				});
			});
		});
	};
})(jQuery);