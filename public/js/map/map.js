/*
 * 5 ways to customize the infowindow
 * 2015 - en.marnoto.com
*/

// map center
var center = new google.maps.LatLng(40.7055537, -74.0156323);

// marker position
var factory = new google.maps.LatLng(40.7055537, -74.0156323);
function initialize() {
  var mapOptions = {
    center: center,
    styles: [
      {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 65
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 51
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 30
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 40
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "hue": "#ffff00"
          },
          {
            "lightness": -25
          },
          {
            "saturation": -97
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": -25
          },
          {
            "saturation": -100
          }
        ]
      }
    ],
    zoom: 14,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

  // InfoWindow content
  var content = '<div id="iw-container">' +
                    '<div class="img-map">' +
                      '<img src="images/logo2.png">' +
                    '</div>' +
                    '<div class="content-map">'+
                      '<div class="addres-map">121 King Street, Melbourne Victoria 3000 Australia</div>' +
                      '<div class="map-contact">' +
                        '<div class="phone-map">Phone : <span>070-7782-9137</span></div>'+
                        '<div class="email-map">Email : <span>info@quato.com</span></div>'+
                      '</div>' +
                    '</div>' +
                '</div>';

  // A new Info Window is created and set content
  var infowindow = new google.maps.InfoWindow({
    content: content,

    // Assign a maximum value for the width of the infowindow allows
    // greater control over the various content elements
    maxWidth: 585
  });
   
  // marker options
  var marker = new google.maps.Marker({
    position: factory,
    map: map,
    icon:'images/icon-map.png',
    title: "Nautica",
    animation: google.maps.Animation.DROP
  });

  // This event expects a click on a marker
  // When this event is fired the Info Window is opened.
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  // Event that closes the Info Window with a click on the map
  google.maps.event.addListener(map, 'click', function() {
    infowindow.close();
  });

  // *
  // START INFOWINDOW CUSTOMIZE.
  // The google.maps.event.addListener() event expects
  // the creation of the infowindow HTML structure 'domready'
  // and before the opening of the infowindow, defined styles are applied.
  // *
  google.maps.event.addListener(infowindow, 'domready', function() {

    // Reference to the DIV that wraps the bottom of infowindow
    var iwOuter = $('.gm-style-iw');
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

    /* Since this div is in a position prior to .gm-div style-iw.
     * We use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    */
    var iwBackground = iwOuter.prev();
    var win = $(window).width();

    // Removes background shadow DIV
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

    // Moves the infowindow 115px to the right.
    iwOuter.parent().parent().css({left: '100px'});

    // Moves the shadow of the arrow 76px to the left margin.
    iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 208px !important;' + 'top: 88px !important;'});

    // Moves the arrow 76px to the left margin.
    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 208px !important;' + 'top: 88px !important;'});
    if (win < 768) {
      iwOuter.parent().parent().css({left: '50px'});

      iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s  + 'display: none'});

      // Moves the arrow 76px to the left margin.
      iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'display: none'});
    }
    if (isSafari) {
      // Moves the shadow of the arrow 76px to the left margin.
      iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 208px !important;' + 'top: 85px !important;'});

      // Moves the arrow 76px to the left margin.
      iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 208px !important;' + 'top: 85px !important;'});
    }
    if (win < 480) {
      iwOuter.parent().parent().css({left: '30px'});
    }
    // Changes the desired tail shadow color.
    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next();

    // Apply the desired effect to the close button
    //iwCloseBtn.css({opacity: '1', right: '38px', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});
    //
    //// If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    //if($('.iw-content').height() < 140){
    //  $('.iw-bottom-gradient').css({display: 'none'});
    //}
    //
    //// The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    //iwCloseBtn.mouseout(function(){
    //  $(this).css({opacity: '1'});
    //});
    iwCloseBtn.css({'display': 'none'});
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);