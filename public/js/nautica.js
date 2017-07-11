$(document).ready(function() {
    "use strict";
    engoTabcollection();
    engoMenu();
    engoTabcollection();
    engoMinicart();
    engoDropdow();
    engoBacktop();
    engoStickyMenu();
    engoPriceSlider();
    engoowl();
    engoTab();
    engoQTY(); 
    owlCarousel();
    list_grid();
    verticalmenucanvas();
    verticalmenu();
    $('[data-toggle="tooltip"]').tooltip({container: 'body'}); 
})
 function owlCarousel(){
    "use strict";
            $(".owl-carousel-play .owl-carousel").each( function(){
                var config = {
                    navigation : false, // Show next and prev buttons
                    slideSpeed : 300,
                    paginationSpeed : 400,
                    responsiveClass:true,
                    
                   
                };
                var owl = $(this);
                if($(this).attr( 'data-pagination' ) == true) {
                    config.pagination = true;
                }
                if($(this).attr("data-autoPlay") == "true") {
                    config.autoplay = true;
                    if($(this).attr("data-time") > 0) {
                        config.autoplayTimeout = $(this).attr("data-time");
                    }
                }
                if($(this).attr("data-loop") == "true") {
                    config.loop = true;
                }
                if($(this).attr("data-navigation") == "true") {
                    config.dots = true;
                }
                if($(this).attr("data-next-prev") == "true") {
                    config.nav = true;
                }
                if ($(this).attr('data-slide')) {
                    config.items = $(this).attr('data-slide' );
                }
                var responsive_config = {};
                if ($(this).attr('data-desktop')) {
                    responsive_config.itemsDesktop = $(this).attr('data-desktop');
                }
                if ($(this).attr('data-desktopsmall')) {
                    responsive_config.itemsDesktopSmall = $(this).attr('data-desktopsmall');
                }
                if ($(this).attr('data-desktopsmall')) {
                    responsive_config.itemsTablet = $(this).attr('data-tablet');
                }
                if ($(this).attr('data-tabletsmall')) {
                    responsive_config.itemsTabletSmall = $(this).attr('data-tabletsmall');
                }
                if ($(this).attr('data-mobile')) {
                    responsive_config.itemsMobile = $(this).attr('data-mobile');
                }


                var responsive = {
                    0:{
                        items:1
                    },
                    480:{
                        items:responsive_config.itemsMobile
                    },
                    640:{
                        items:responsive_config.itemsTabletSmall
                    },
                    768:{
                        items:responsive_config.itemsTablet
                    },
                    1024:{
                        items:responsive_config.itemsDesktopSmall
                    }
                };
                if($.isEmptyObject(responsive_config) == false) {
                    /*console.log(JSON.stringify(responsive_config));*/
                    config.responsive = responsive;
                }
                owl.owlCarousel( config );
                $('.left',$(this).parent()).on('click',function(){
                    owl.trigger('prev.owl.carousel');
                    return false;
                });
                $('.right',$(this).parent()).on('click',function(){
                    owl.trigger('next.owl.carousel');
                    return false;
                });
            } );
        }

// function engoMenu() {
//     $('.sub-menu').each(function() {
//         $(this).parent().addClass('has-child').find('> a').append('<span class="arrow"></span>');
//     });
//     $('.main-menu .arrow').on('click', function(e) {
//         e.preventDefault();
//         $(this).parents('li').find('> .sub-menu').slideToggle('fast');
//     });
//     $('.sub-menu.mega-menu-2').each(function() {
//         $(this).parent().css('position', 'static');

//     });
//     $('.mobile-menu').on('click', function() {
//         $(this).parent().toggleClass('open');
//     });

//     $('.off-canvas.nav-icon').on('click', function() {
//         $(this).parents('.main-menu').find('.off-canvas-menu').toggleClass('show');
//         $(this).toggleClass('show');
//         $('.overlay').toggleClass('active');

//     });
//     $('.btn-nav.nav-icon').on('click', function() {
//         $(this).toggleClass('active');
//         $('#main-menu').toggleClass('active');
//         });
// }

function engoMenu() {
    "use strict";
    $('.sub-menu').each(function() {
        $(this).parent().addClass('has-child').find('> a').append('<span class="arrow"></span>');
    });
    $('.main-menu .arrow').on('click', function(e) {
        e.preventDefault();
        $(this).parents('li').find('> .sub-menu').slideToggle('fast');
    });
    $('.sub-menu.mega-menu-2').each(function() {
        $(this).parent().css('position', 'static');

    });
    $('.mobile-menu').on('click', function() {
        $(this).parent().toggleClass('open');
    });

    $('.off-canvas.nav-icon').on('click', function() {
        $(this).parents('.main-menu').find('.off-canvas-menu').toggleClass('show');
        $(this).toggleClass('show');
        $('.overlay').toggleClass('active');

    });
    $('.btn-nav.nav-icon').on('click', function() {
        $(this).toggleClass('active');
        $('.collapse').toggleClass('active');
        });
    $('.btn-nav.nav-icon').on('click', function() {
        $(this).toggleClass('highlight');
        $('#engo-masthead').toggleClass('highlight');
        });
}

// Tab collection
function engoTabcollection() {
    "use strict";
    $('.tabs-collection .ul-tab li').on('click',function(e) {
        e.preventDefault();
        $(this).parent().find('li').removeClass();
        $(this).parents('.tabs-collection').find('.tab-content').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('data-tab');
        $(this).parents('.tabs-collection').find('.' + tab).addClass('active');
        $('.item').attr("style","visibility: visible; animation-name: fadeInUp;animation-duration: 1s;");
        $('.product-item').attr("style","visibility: visible; animation-name: fadeInUp;animation-duration: 1s;");
        
    });
}

// Owl-Carousel
function engoowl() {
    
}
function engoMinicart() {
    "use strict";
    $(".mini-cart").hover(function() {
        $(this).find('.mini-cart-content').toggleClass("active");
    });
    // minicart off canvas
    $(".off-canvas").click(function() {
        $(this).parent().find('.off-canvas-content').addClass("show");
        var height = $(document).height();
        $(this).parent().find('.mini-cart-content').css('height', "100vh");
    });
    $('.close-off-canvas').on('click',function(e) {
        e.preventDefault;
       
        $(this).parent().parent().removeClass('show');
    });
}
// 
function engoDropdow() {
    "use strict";
    $(".settings").hover(function() {
        $(this).css('position', 'relative');
        $(this).find('.dropdown-content').toggleClass('active');
    });
}

function engoBacktop() {
    // hide #back-top first
    "use strict";

    // fade in #back-top
    $(function() {
        var lastScrollTop = 0;
        var hfooter=$('footer').height();
        var hbody=$('body').height() - hfooter -400;
         
        var backtoTop = $('#back-top');
        $(window).scroll(function() {
           
            var st = $(this).scrollTop();
            if (st > 1000) {
                                  
                    backtoTop.addClass('active');
                 
            lastScrollTop = st;
                
            } else {
                backtoTop.removeClass('active');
            }
            if(st> hbody){
                backtoTop.addClass('fix-backtop');
                backtoTop.addClass('active');
               
            }
            else{
                backtoTop.removeClass('fix-backtop');
            }
        });

        // scroll body to 0px on click
        backtoTop.on('click',function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

}

function engoStickyMenu() {
    "use strict";
    var lastScrollTop = 0;
    var hdr = $('header').height();
    var stickyheader = $('.sticky-header');
    $(window).scroll(function() {
        if ($(this).scrollTop() > hdr) {


            var st = $(this).scrollTop();
            if (st > lastScrollTop) {
                stickyheader.removeClass('sticky-fixed').removeClass('sticky-tranform');

            } else {
                stickyheader.addClass('sticky-fixed').addClass('sticky-tranform');

            }
            lastScrollTop = st;

        } else {

            stickyheader.removeClass('sticky-fixed').addClass('sticky-tranform');
        }
    });

}

function engoPriceSlider() {
    "use strict";
    var slidertop = $('#slider-range');
    slidertop.slider({

        range: true,

        min: 0,

        max: 500,

        values: [0, 300],

        slide: function(event, ui) {

            $('#amount').text('$' + ui.values[0] + ' - $' + ui.values[1]);

        }

    });

    $('#amount').text('$' + slidertop.slider('values', 0) + ' - $' + slidertop.slider('values', 1));

}
function engoTab(){
    "use strict";
    $( '.tabs-container' ).each(function() {
            $( this ).find( '.tabs li:first-child a' ).addClass('active');
            $( this ).find( '.tab-content:first' ).show();

            $( this ).find('.tabs li a').on('click',function(e){
                e.preventDefault();
                var selector = $(this).attr('href');
                $(this).parent().parent().find('a').not(this).removeClass('active');
                $(this).addClass('active');
                $(this).parents('.tabs-container').find('.tab-content').not(selector).slideUp(300);
                $(this).parents('.tabs-container').find(selector).slideDown(300);
            });
        });
        
}

function engoQTY(){
    "use strict";
    if( $( '.quantity' ).length > 0 ) {
            var form_cart = $( 'form .quantity' );
            form_cart.prepend( '<span class="minus"><i class="fa fa-minus-square-o"></i></span>' );
            form_cart.append( '<span class="plus"><i class="fa fa-plus-square-o"></i></span>' );

            var minus = form_cart.find( $( '.minus' ) );
            var plus  = form_cart.find( $( '.plus' ) );

            minus.on( 'click', function(){
                var qty = $( this ).parent().find( '.qty' );
                if ( qty.val() <= 1 ) {
                    qty.val( 1 );
                } else {
                    qty.val( ( parseInt( qty.val() ) - 1 ) );
                }
            });
            plus.on( 'click', function(){
                var qty = $( this ).parent().find( '.qty' );
                qty.val( ( parseInt( qty.val() ) + 1 ) );
            });
        }
}
function list_grid() {
    "use strict";
    /*list-grid*/
        $('.btn-list').on('click',function(e){
            e.preventDefault();
            $(this).parent().find('a').removeClass('active');
            $(this).addClass('active');
            $('#tabs-list').show();
            $('#tabs-grid').hide();
        });
        $('.btn-grid').on('click',function(e){
            e.preventDefault();
                        $(this).parent().find('a').removeClass('active');
            $(this).addClass('active');
            $('#tabs-list').hide();
            $('#tabs-grid').show();
        });
}
function verticalmenucanvas (){
    "use strict";
         $('.toggle-dropdown-menu ul li.item-toggle-dropdown').each(function(){
             if ($(this).find('.item-toggle-menu').length > 0) {
                 $(this).append('<i class="toggle-button fa fa-angle-right"></i>');
             }
             $(this).find('.item-toggle-menu').slideUp('fast');
             $(this).children('a').on("click",function(e){
                 e.preventDefault();
                  $(this).parent().find('.item-toggle-menu').toggle('Show');
                  $(this).parent().find('.toggle-button').toggleClass('opened');
             });



         });
}

function verticalmenu(){
    "use strict";
         $('.widget-menu').each(function(){
             if ($(this).find('.widget-menu-detail').length > 0) {
                 $(this).append('<i class="toggle-button-con fa fa-angle-right"></i>');
             }
             $(this).find('.widget-menu-detail').slideUp('fast');
             $(this).children('h3').on("click",function(e){
                 e.preventDefault();
                  $(this).parent().find('.widget-menu-detail').toggle('Show');
                  $(this).parent().find('.toggle-button-con').toggleClass('opened');
             });

            

         });
}