window.jQuery = window.$ = jQuery;
var $window = $(window);
var Engo_Apps = {
    start: function() {
        "use strict";
        this.offcanvasMenu.start();
        this.wowAnimate();
    },
    offcanvasMenu: {
        start: function() {
            var self = this;
            self.offcanvas_position();
            $window.on('scroll', function () {
                self.offcanvas_position();
            });
            $('[data-toggle="offcanvas"], .btn-offcanvas').on('click',function () {
                $(this).toggleClass('on');
                $('.row-offcanvas').toggleClass('active') ;
            });

            $("#main-menu-offcanvas .caret").on('click', function(){
                $(this).parent().siblings().removeClass('open');
                $(this).parent().toggleClass('open');
                return false;
            } );
            $('.showright').on('click', function(){
                $('.offcanvas-showright').toggleClass('active');
            } );
        },
        offcanvas_position: function () {
            var scroll_Top = $window.scrollTop();
            if (scroll_Top >= 1) {
                if($('[data-toggle="offcanvas"]').hasClass('on')) {
                    if(scroll_Top >= 40) {
                        $('[data-toggle="offcanvas"]').css({'position':'absolute','top':'4px'});
                    } else {
                        $('[data-toggle="offcanvas"]').removeAttr('style');
                    }
                } else {
                    $('[data-toggle="offcanvas"]').css({'position':'absolute','top':'4px'});
                }
            } else {
                $('[data-toggle="offcanvas"]').removeAttr('style');
            }
        }
    },
    
    wowAnimate: function(){
        var wow = new WOW();
        wow.init();
    },
    animateElements: {
        start: function(){
            $window.on('scroll resize', this.check_if_in_view());
            $window.trigger('scroll');
        },
        check_if_in_view: function() {
            var $animation_elements_in = $('.animation-element.fade-in'),
                $animation_elements_left = $('.animation-element.fade-left'),
                $animation_elements_right = $('.animation-element.fade-right'),
                $animation_engoPullDown = $('.animation-element.engo-PullDown'),
                $animation_tinDownIn = $('.animation-element.tin-DownIn'),
                $animation_hover_in = $('.animation-hover-element.fade-in');
            var window_height = $window.height(),
                window_top_position = $window.scrollTop(),
                window_bottom_position = (window_top_position + window_height);

            $animation_hover_in.each(function() {
                var $element = $(this);
                $element.hover(
                    function(){
                        $element.addClass('animated fadeInUp');
                    },
                    function(){
                        $element.removeClass('animated fadeInUp');
                    });
            });

            $animation_tinDownIn.each(function() {
                var $element = $(this);
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + 100);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position+10) &&
                    (element_top_position <= window_bottom_position)) {
                    $element.addClass('animated tinDownIn');
                }
            });
            $animation_engoPullDown.each(function() {
                var $element = $(this);
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + 100);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position+10) &&
                    (element_top_position <= window_bottom_position)) {
                    $element.addClass('engoPullDown');
                }
            });

            $animation_elements_in.each(function() {
                var $element = $(this);
                /*console.log($element);*/
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + 100);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position+10) &&
                    (element_top_position <= window_bottom_position)) {
                    $element.addClass('animated fadeInUp');
                }
            });

            $animation_elements_left.each(function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position+100) &&
                    (element_top_position <= window_bottom_position)) {
                    $element.addClass('animated fadeInLeft');
                }
            });

            $animation_elements_right.each(function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position+100) &&
                    (element_top_position <= window_bottom_position)) {
                    $element.addClass('animated fadeInRight');
                }
            });
        }
    },
    
}
Engo_Apps.start();