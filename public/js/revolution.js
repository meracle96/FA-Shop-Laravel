// on document ready
(function($){
  "use strict";
// revolution slider
var slide = $('.r_slider');
var rwidth =slide.attr('data-width');
var rheight =slide.attr('data-height');
var rscreen =slide.attr('data-screen');
var rfullwidth=slide.attr('data-fullwidth');

  if($('.r_slider').length){

      var api = $('.r_slider').revolution({
           delay:5000,
           startwidth:rwidth,
           startheight:rheight,
           autoHeight:"off",
           fullScreenAlignForce:"off",  
           onHoverStop:"on",  
           thumbWidth:100,
           thumbHeight:50,
           thumbAmount:3,
   
           hideThumbsOnMobile:"off",
           hideBulletsOnMobile:"off",
           hideArrowsOnMobile:"off",
           hideThumbsUnderResoluition:0,

          hideTimerBar:"on",
           hideThumbs:0,
            
           navigationType:"bullet",
           navigationArrows:"solo",
           navigationStyle:"round",
   
           navigationHAlign:"center",
           navigationVAlign:"bottom",
           navigationHOffset:0,
           navigationVOffset:15,
   
           soloArrowLeftHalign:"left",
           soloArrowLeftValign:"center",
           soloArrowLeftHOffset:40,
           soloArrowLeftVOffset:0,
   
           soloArrowRightHalign:"right",
           soloArrowRightValign:"center",
           soloArrowRightHOffset:40,
           soloArrowRightVOffset:0,
            navigationType:"both",                  
            navigationArrows:"",        
            navigationStyle: 'preview3',             
            touchenabled:"on",                      
            onHoverStop:"on",
   
           touchenabled:"on",
   
           stopAtSlide:-1,
           stopAfterLoops:-1,
           hideCaptionAtLimit:0,
           hideAllCaptionAtLilmit:0,
           hideSliderAtLimit:0,
   
           dottedOverlay:"none",
   
           fullWidth:rfullwidth,
           forceFullWidth:"off",
           fullScreen:rscreen,
           fullScreenOffsetContainer:"#topheader-to-offset",
   
           shadow:0
   
      });
    api.bind("revolution.slide.onloaded",function (e,data) {
        var container = $('.revolution_slider');
        container.find('.tp-leftarrow').append('>');
        container.find('.tp-rightarrow').append('<');
        // $('.tp-leftarrow,.tp-rightarrow').fadeIn(1500);

        // create custom thumbs

        (function(){
          var image = $('.r_slider [data-custom-thumb]'),
            len = image.length,
            bullet = $('.tp-bullets .bullet');
          for(var i = 0; i < len; i++){
            bullet.eq(i).append('<div class="custom_thumb tr_all_hover"><img src="' + image.eq(i).data('custom-thumb') + '" alt=""></div>');
          }
        })();

      $('.tp-bullets .bullet').each(function(){
        var curr = $(this);
        curr.on("mouseenter mouseleave",function(){
          curr.children('.custom_thumb').toggleClass('active')
        });
      });
    });

  }
 

})(jQuery);
// on document ready
(function($){
  "use strict";
// revolution slider
var slide = $('.c_slider');
var rwidth =slide.attr('data-width');
var rheight =slide.attr('data-height');
var rscreen =slide.attr('data-screen');
var rfullwidth=slide.attr('data-fullwidth');

  if($('.c_slider').length){

      var api = $('.c_slider').revolution({
           delay:5000,
           startwidth:rwidth,
           startheight:rheight,
           autoHeight:"off",
           fullScreenAlignForce:"off",  
           onHoverStop:"on",  
           thumbWidth:100,
           thumbHeight:50,
           thumbAmount:3,
   
           hideThumbsOnMobile:"off",
           hideBulletsOnMobile:"off",
           hideArrowsOnMobile:"off",
           hideThumbsUnderResoluition:0,

          hideTimerBar:"on",
           hideThumbs:0,
            
           navigationType:"bullet",
           navigationArrows:"solo",
           navigationStyle:"round",
   
           navigationHAlign:"center",
           navigationVAlign:"bottom",
           navigationHOffset:0,
           navigationVOffset:15,
   
           soloArrowLeftHalign:"left",
           soloArrowLeftValign:"center",
           soloArrowLeftHOffset:40,
           soloArrowLeftVOffset:0,
   
           soloArrowRightHalign:"right",
           soloArrowRightValign:"center",
           soloArrowRightHOffset:40,
           soloArrowRightVOffset:0,
            navigationType:"both",                  
            navigationArrows:"",        
            navigationStyle: 'preview3',             
            touchenabled:"on",                      
            onHoverStop:"on",
   
           touchenabled:"on",
   
           stopAtSlide:-1,
           stopAfterLoops:-1,
           hideCaptionAtLimit:0,
           hideAllCaptionAtLilmit:0,
           hideSliderAtLimit:0,
   
           dottedOverlay:"none",
   
           fullWidth:rfullwidth,
           forceFullWidth:"off",
           fullScreen:rscreen,
           fullScreenOffsetContainer:".header-v8",
   
           shadow:0
   
      });
    api.bind("revolution.slide.onloaded",function (e,data) {
        var container = $('.revolution_slider');
        container.find('.tp-leftarrow').append('>');
        container.find('.tp-rightarrow').append('<');
        // $('.tp-leftarrow,.tp-rightarrow').fadeIn(1500);

        // create custom thumbs

        (function(){
          var image = $('.c_slider [data-custom-thumb]'),
            len = image.length,
            bullet = $('.tp-bullets .bullet');
          for(var i = 0; i < len; i++){
            bullet.eq(i).append('<div class="custom_thumb tr_all_hover"><img src="' + image.eq(i).data('custom-thumb') + '" alt=""></div>');
          }
        })();

      $('.tp-bullets .bullet').each(function(){
        var curr = $(this);
        curr.on("mouseenter mouseleave",function(){
          curr.children('.custom_thumb').toggleClass('active')
        });
      });
    });

  }
 

})(jQuery);