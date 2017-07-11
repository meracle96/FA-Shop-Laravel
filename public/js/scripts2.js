
$(document).ready(function() {
  "use strict";
  // main menu
  $( '.sub-menu' ).each(function() {
    $( this ).parent().addClass( 'has-child' ).find( '> a' ).append( '<span class="arrow"></span>' );
  });
  $( '.main-menu .arrow' ).on( 'click', function(e) {
    e.preventDefault();
    $( this ).parents( 'li' ).find( '> .sub-menu' ).slideToggle( 'fast' );
  });
  $( '.mobile-menu' ).on( 'click', function() {
    $( this ).parent().toggleClass('open');
  });
  // 
  $('.carousel-product .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1200: {
        items: 6,
        nav: true,
        loop: false,
        margin: 30
      }
    }
  })
  
  $('.brand .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplaySpeed: 2000,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      992: {
        items: 4,
        nav: false
      },
      1200: {
        items: 6,
        nav: false,
        loop: true,
        autoplaySpeed: 2000,
        margin: 30
      }
    }
  })
  
  $('.latest-blog .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      992: {
        items: 3,
        nav: false,
        loop: true,
        autoplaySpeed: 2000,
        margin: 30
      }
    }
  })
  
  $('.testimonial-v1 .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
      0:{
        items:1
      }
    }
  })
  $('.main-slider .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplaySpeed: 2000,
    responsive:{
      0:{
        items:1
      }
    }
  })
})