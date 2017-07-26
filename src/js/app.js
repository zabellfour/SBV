// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.


( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    $('.banner-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: true,
            nav: true
        });

    $('.brands-carousel').owlCarousel({
            items: 4,
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            responsive:{
                0:{
                    items:2,
                    nav:true
                },
                768:{
                    items:4,
                    nav:true
                }
            }
        });

    $(".accelerator").hover(function(){
        $("img", this).toggleClass("grayscale");
    });

    var $menuOpener = $('.menu-opener'),
        $body = $('body'),
        $menuClose = $('.menu-close');
        $menuOpener.on("click", function() {
        $body.toggleClass('menu-open');
        });
        $menuClose.on("click", function() {
             $body.removeClass('menu-open');
        });
  });

})(jQuery);